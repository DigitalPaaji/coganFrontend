'use client';

import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { motion } from 'framer-motion';
import {
  FaShieldAlt,
  FaRobot,
  FaCogs,
  FaRocket,
  FaNetworkWired,
  FaSyncAlt
} from 'react-icons/fa';

/**
 * AboutUs - Monochrome page with interactive particle-based DNA helix
 * - Drop into app/about/page.jsx
 * - Requires: three, framer-motion, react-icons
 */

export default function AboutUs() {
  const canvasRef = useRef(null);
  const textRefs = useRef([]);
  const rendererRef = useRef(null);
  const helixGroupRef = useRef(null);

  useEffect(() => {
    // IntersectionObserver for fade-in text
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.12 }
    );
    textRefs.current.forEach(r => r && observer.observe(r));

    // Three.js scene setup
    if (!canvasRef.current) return;
    const container = canvasRef.current;

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x0a0a0a);

    const camera = new THREE.PerspectiveCamera(60, 1, 0.1, 1000);
    camera.position.set(0, 0, 10);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    rendererRef.current = renderer;
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0); // transparent background
    container.innerHTML = '';
    container.appendChild(renderer.domElement);

    // Responsive resize
    function onResize() {
      const rect = container.getBoundingClientRect();
      const width = Math.max(300, Math.floor(rect.width));
      const height = Math.max(300, Math.floor(rect.height || width));
      renderer.setSize(width, height, false);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    }
    onResize();
    window.addEventListener('resize', onResize);

    // Lights (monochrome)
    const ambient = new THREE.AmbientLight(0xffffff, 0.45);
    scene.add(ambient);
    const dir = new THREE.DirectionalLight(0xffffff, 0.8);
    dir.position.set(5, 10, 7);
    scene.add(dir);

    // Group for helix to apply transforms/pulse
    const helixGroup = new THREE.Group();
    helixGroupRef.current = helixGroup;
    scene.add(helixGroup);

    // Parameters
    const turns = 6;             // number of helix turns
    const pointsPerTurn = 120;   // density
    const radius = 1.2;          // helix radius
    const height = 6.0;          // total height of helix
    const totalPoints = turns * pointsPerTurn;

    // Create two strand point clouds (left and right)
    function buildStrand(phase = 0) {
      const positions = new Float32Array(totalPoints * 3);
      const colors = new Float32Array(totalPoints * 3);
      for (let i = 0; i < totalPoints; i++) {
        const t = (i / (totalPoints - 1));              // 0..1 along helix
        const angle = t * turns * Math.PI * 2 + phase;  // angle along turns
        const y = (t - 0.5) * height;                   // center at 0
        const r = radius * (1 - 0.08 * Math.sin(t * Math.PI * 4)); // subtle radius variation

        const x = Math.cos(angle) * r;
        const z = Math.sin(angle) * r;

        const idx = i * 3;
        positions[idx] = x;
        positions[idx + 1] = y;
        positions[idx + 2] = z;

        // monochrome color (white-ish, slight variation)
        const c = 0.85 + 0.15 * Math.sin(t * Math.PI * 8 + phase);
        colors[idx] = c;
        colors[idx + 1] = c;
        colors[idx + 2] = c;
      }

      const geom = new THREE.BufferGeometry();
      geom.setAttribute('position', new THREE.BufferAttribute(positions, 3));
      geom.setAttribute('color', new THREE.BufferAttribute(colors, 3));
      return geom;
    }

    const strandA = buildStrand(0);
    const strandB = buildStrand(Math.PI);

    // Points material (particle)
    const pointsMat = new THREE.PointsMaterial({
      size: 0.06,
      sizeAttenuation: true,
      vertexColors: true,
      transparent: true,
      opacity: 0.95,
      depthWrite: false
    });

    const pointsA = new THREE.Points(strandA, pointsMat);
    const pointsB = new THREE.Points(strandB, pointsMat);
    helixGroup.add(pointsA);
    helixGroup.add(pointsB);

    // Rungs — connect the two strands with lines at intervals
    const rungMaterial = new THREE.LineBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.18 });
    const rungPositions = [];
    for (let i = 0; i < totalPoints; i += Math.floor(pointsPerTurn / 6)) {
      const t = i / (totalPoints - 1);
      const angleA = t * turns * Math.PI * 2;
      const y = (t - 0.5) * height;
      const r = radius * (1 - 0.08 * Math.sin(t * Math.PI * 4));

      const ax = Math.cos(angleA) * r;
      const az = Math.sin(angleA) * r;

      const angleB = angleA + Math.PI;
      const bx = Math.cos(angleB) * r;
      const bz = Math.sin(angleB) * r;

      // push a short segment from A to B
      rungPositions.push(ax, y, az);
      rungPositions.push(bx, y, bz);
    }
    const rungGeom = new THREE.BufferGeometry();
    rungGeom.setAttribute('position', new THREE.Float32BufferAttribute(rungPositions, 3));
    const rungs = new THREE.LineSegments(rungGeom, rungMaterial);
    helixGroup.add(rungs);

    // Add a faint center axis for depth (optional)
    const axisGeom = new THREE.BufferGeometry().setFromPoints([
      new THREE.Vector3(0, -height / 2, 0),
      new THREE.Vector3(0, height / 2, 0)
    ]);
    const axisMat = new THREE.LineDashedMaterial({ color: 0xffffff, dashSize: 0.12, gapSize: 0.06, opacity: 0.06, transparent: true });
    const axisLine = new THREE.Line(axisGeom, axisMat);
    axisLine.computeLineDistances();
    helixGroup.add(axisLine);

    // Add subtle floor reflection (very subtle plane)
    // (not necessary, commented out — you can enable if desired)
    // const floor = new THREE.Mesh(new THREE.PlaneGeometry(20, 20), new THREE.MeshBasicMaterial({ color: 0x000000, opacity: 0.02, transparent: true }));
    // floor.rotation.x = -Math.PI / 2;
    // floor.position.y = -height/2 - 0.5;
    // scene.add(floor);

    // Orbit controls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.08;
    controls.minDistance = 3;
    controls.maxDistance = 25;
    controls.rotateSpeed = 0.6;
    controls.panSpeed = 0.5;

    // Raycaster for interactions
    const raycaster = new THREE.Raycaster();
    const pointer = new THREE.Vector2();
    let hovering = false;
    let hoverIntensity = 0; // 0..1

    // Click pulse state
    let pulseActive = false;
    let pulseStart = 0;

    function onPointerMove(e) {
      const rect = renderer.domElement.getBoundingClientRect();
      pointer.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      pointer.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;

      raycaster.setFromCamera(pointer, camera);
      // intersect with the Points objects - raycaster can intersect Points
      const intersects = raycaster.intersectObjects([pointsA, pointsB], true);
      if (intersects.length > 0) {
        hovering = true;
      } else {
        hovering = false;
      }
    }

    function onPointerDown(e) {
      const rect = renderer.domElement.getBoundingClientRect();
      pointer.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      pointer.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;

      raycaster.setFromCamera(pointer, camera);
      const intersects = raycaster.intersectObjects([pointsA, pointsB], true);
      if (intersects.length > 0) {
        pulseActive = true;
        pulseStart = performance.now();
      }
    }

    renderer.domElement.style.cursor = 'grab';
    renderer.domElement.addEventListener('pointermove', onPointerMove);
    renderer.domElement.addEventListener('pointerdown', onPointerDown);

    // Animation loop
    const clock = new THREE.Clock();

    let baseRotationSpeed = 0.004;
    let extraSpeed = 0;

    function animate() {
      requestAnimationFrame(animate);
      const dt = clock.getDelta();

      // Slowly rotate the whole helix group
      helixGroup.rotation.y += (baseRotationSpeed + extraSpeed);

      // Slight up/down bobbing
      helixGroup.position.y = Math.sin(clock.elapsedTime * 0.6) * 0.08;

      // Hover intensity lerp
      hoverIntensity += (hovering ? 1 : 0 - hoverIntensity) * 0.08;

      // Apply hover visual effects:
      // - increase particle size slightly
      // - brighten rung opacity
      const targetSize = 0.06 + 0.06 * Math.min(0.65, hoverIntensity);
      pointsMat.size = THREE.MathUtils.lerp(pointsMat.size, targetSize, 0.12);

      const targetRungOpacity = 0.18 + 0.35 * Math.min(1, hoverIntensity * 1.6);
      rungMaterial.opacity = THREE.MathUtils.lerp(rungMaterial.opacity, targetRungOpacity, 0.08);

      // Click pulse handling: short burst of scale & speed
      if (pulseActive) {
        const now = performance.now();
        const t = (now - pulseStart) / 600; // 600ms
        if (t >= 1) {
          pulseActive = false;
          extraSpeed = 0;
        } else {
          // ease: accelerate then decay
          const pulse = Math.sin(t * Math.PI) * 0.06; // amplitude
          extraSpeed = pulse * 0.5;
          helixGroup.scale.setScalar(1 + pulse * 0.6);
        }
      } else {
        // lerp scale back to 1
        const currentScale = helixGroup.scale.x;
        helixGroup.scale.lerp(new THREE.Vector3(1, 1, 1), 0.06);
      }

      // subtle color shimmer in particles (monochrome variation)
      const colorsA = strandA.getAttribute('color');
      for (let i = 0; i < colorsA.count; i++) {
        // small animated brightness modulation
        const base = 0.85 + 0.15 * Math.sin((i / colorsA.count) * Math.PI * 8 + clock.elapsedTime * 0.9);
        colorsA.array[i * 3] = base;
        colorsA.array[i * 3 + 1] = base;
        colorsA.array[i * 3 + 2] = base;
      }
      colorsA.needsUpdate = true;

      const colorsB = strandB.getAttribute('color');
      for (let i = 0; i < colorsB.count; i++) {
        const base = 0.85 + 0.15 * Math.cos((i / colorsB.count) * Math.PI * 8 + clock.elapsedTime * 0.95);
        colorsB.array[i * 3] = base;
        colorsB.array[i * 3 + 1] = base;
        colorsB.array[i * 3 + 2] = base;
      }
      colorsB.needsUpdate = true;

      controls.update();
      renderer.render(scene, camera);
    }
    animate();

    // Cleanup on unmount
    return () => {
      observer.disconnect();
      window.removeEventListener('resize', onResize);
      renderer.domElement.removeEventListener('pointermove', onPointerMove);
      renderer.domElement.removeEventListener('pointerdown', onPointerDown);
      controls.dispose();

      // dispose geometries & materials
      strandA.dispose();
      strandB.dispose();
      pointsMat.dispose();
      rungGeom.dispose();
      rungMaterial.dispose();
      axisGeom && axisGeom.dispose?.();

      renderer.dispose();
      if (container) container.innerHTML = '';
    };
  }, []);

  // Features list (monochrome icons)
  const features = [
    {
      icon: <FaNetworkWired className="text-gray-200 text-2xl" />,
      title: 'System Network (The Core Blueprint)',
      description: 'We audit your scattered tools (CRM, Finance, Project Management) and build them into one unified system. The result is immediate clarity, faster execution, and a single source of truth—powered by intelligence, not friction.'
    },
    {
      icon: <FaRobot className="text-gray-200 text-2xl" />,
      title: 'Custom AI Agents (Your Digital Co-Pilot)',
      description: 'We deploy custom AI Workflow Agents to handle repetitive, time-consuming tasks. Imagine AI automatically qualifying leads, organizing project data, or syncing financial records.'
    },
    {
      icon: <FaSyncAlt className="text-gray-200 text-2xl" />,
      title: 'What This Means',
      description: 'You get a tireless, hyper-efficient team member without the overhead—automation that scales with your business.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white">
      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-extrabold">
            About <span className="text-gray-100">Cogan.life</span>
          </h1>
          <p className="text-lg text-gray-300 mt-4 max-w-3xl mx-auto">
            1 . We are Cogan.life—more than just system integrators. Our name, derived from the Irish meaning "Son of a Warrior," and our symbol, the Triskelion, reflect our founding philosophy: every business needs a stable core and the dynamic momentum to thrive.
          </p>
          <p className="text-lg text-gray-300 mt-6 max-w-3xl mx-auto">
            2. What We Do: <span className="font-semibold">AI-Powered Organization</span><br/>
            We are the architects who integrate your systems and deploy AI to handle the grunt work. We build two things that change everything for small businesses:
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-start gap-12 mb-12">
          {/* Left column: text */}
          <div className="lg:w-1/2 space-y-8">
            <div ref={el => (textRefs.current[0] = el)} className="fade-in p-6 rounded-2xl bg-gray-800/30 border border-gray-700">
              <h2 className="text-2xl font-bold mb-3">System Network (The Core Blueprint)</h2>
              <p className="text-gray-300">
                We audit your scattered tools (CRM, Finance, Project Management) and build them into one unified system.
                The result is immediate clarity, faster execution, and a single source of truth—powered by intelligence, not friction.
              </p>
            </div>

            <div ref={el => (textRefs.current[1] = el)} className="fade-in p-6 rounded-2xl bg-gray-800/30 border border-gray-700">
              <h2 className="text-2xl font-bold mb-3">Custom AI Agents (Your Digital Co-Pilot)</h2>
              <p className="text-gray-300">
                We deploy custom AI Workflow Agents to handle repetitive, time-consuming tasks.
                Imagine AI automatically qualifying leads, organizing project data, or syncing financial records. You get a tireless, hyper-efficient team member without the overhead.
              </p>
            </div>

            <div ref={el => (textRefs.current[2] = el)} className="fade-in p-6 rounded-2xl bg-gray-800/30 border border-gray-700">
              <h2 className="text-2xl font-bold mb-3">Why it Matters</h2>
              <p className="text-gray-300">
                We remove friction so teams move faster and decisions are backed by one source of truth—letting founders focus on strategy while ops run smoothly.
              </p>
            </div>
          </div>

          {/* Right column: 3D canvas */}
          <div className="lg:w-1/2 flex justify-center items-center">
            <div className="relative w-full max-w-[540px] h-[540px] rounded-2xl border border-gray-700/20 overflow-hidden shadow-[0_0_30px_#ffffff12]">
              <div ref={canvasRef} className="w-full h-full" />
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-xs text-gray-300 opacity-70">
                Interactive DNA Helix — hover / click to interact
              </div>
            </div>
          </div>
        </div>

        {/* Features grid */}
        <div className="grid md:grid-cols-3 gap-6 mt-8">
          {features.map((f, idx) => (
            <motion.div
              key={idx}
              ref={el => (textRefs.current[idx + 3] = el)}
              className="fade-in p-6 rounded-2xl bg-gray-800/20 border border-gray-700 hover:border-gray-400 transition-all"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.06 * idx }}
            >
              <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4 bg-gray-700">
                {f.icon}
              </div>
              <h3 className="text-lg font-bold mb-2">{f.title}</h3>
              <p className="text-gray-300 text-sm">{f.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .fade-in {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.9s ease, transform 0.9s ease;
        }
        .fade-in.visible {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
    </div>
  );
}
