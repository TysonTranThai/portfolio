"use client";

import * as React from "react";
import * as THREE from "three";
import { useTheme } from "next-themes";

export function HeroBackground() {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";

  React.useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    let animationFrameId: number;
    const width = container.clientWidth || window.innerWidth;
    const height = container.clientHeight || window.innerHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 1000);
    camera.position.z = 80;

    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({
        alpha: true,
        antialias: true,
        powerPreference: "high-performance",
      });
    } catch {
      return;
    }

    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);
    container.appendChild(renderer.domElement);

    const particleCount = window.innerWidth < 768 ? 100 : 220;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const velocities = new Float32Array(particleCount * 3);
    const scales = new Float32Array(particleCount);

    const rangeX = 140;
    const rangeY = 80;
    const rangeZ = 50;

    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * rangeX;
      positions[i * 3 + 1] = (Math.random() - 0.5) * rangeY;
      positions[i * 3 + 2] = (Math.random() - 0.5) * rangeZ;

      velocities[i * 3] = (Math.random() - 0.5) * 0.04;
      velocities[i * 3 + 1] = (Math.random() - 0.5) * 0.04;
      velocities[i * 3 + 2] = (Math.random() - 0.5) * 0.02;

      scales[i] = Math.random() * 2.5 + 1.2;
    }

    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute("scale", new THREE.BufferAttribute(scales, 1));

    const pointColor = isDark ? new THREE.Color("#38bdf8") : new THREE.Color("#0284c7");
    const material = new THREE.PointsMaterial({
      color: pointColor,
      size: 2.2,
      transparent: true,
      opacity: isDark ? 0.65 : 0.45,
      blending: isDark ? THREE.AdditiveBlending : THREE.NormalBlending,
    });

    const particles = new THREE.Points(geometry, material);
    scene.add(particles);

    const lineMaterial = new THREE.LineBasicMaterial({
      color: pointColor,
      transparent: true,
      opacity: isDark ? 0.15 : 0.08,
      blending: isDark ? THREE.AdditiveBlending : THREE.NormalBlending,
    });

    const maxConnections = particleCount * 2;
    const linePositions = new Float32Array(maxConnections * 6);
    const lineGeometry = new THREE.BufferGeometry();
    lineGeometry.setAttribute("position", new THREE.BufferAttribute(linePositions, 3));
    const lines = new THREE.LineSegments(lineGeometry, lineMaterial);
    scene.add(lines);

    const torusGeo = new THREE.TorusGeometry(26, 0.4, 16, 100);
    const torusMat = new THREE.MeshBasicMaterial({
      color: isDark ? 0x6366f1 : 0x0284c7,
      wireframe: true,
      transparent: true,
      opacity: isDark ? 0.18 : 0.08,
    });
    const torus = new THREE.Mesh(torusGeo, torusMat);
    torus.position.set(30, -5, -20);
    torus.rotation.x = Math.PI / 4;
    scene.add(torus);

    let mouseX = 0;
    let mouseY = 0;
    let targetMouseX = 0;
    let targetMouseY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const windowHalfX = window.innerWidth / 2;
      const windowHalfY = window.innerHeight / 2;
      targetMouseX = (e.clientX - windowHalfX) * 0.015;
      targetMouseY = (e.clientY - windowHalfY) * 0.015;
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth || window.innerWidth;
      const h = container.clientHeight || window.innerHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener("resize", handleResize);

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      mouseX += (targetMouseX - mouseX) * 0.05;
      mouseY += (targetMouseY - mouseY) * 0.05;

      camera.position.x = mouseX * 2;
      camera.position.y = -mouseY * 2;
      camera.lookAt(scene.position);

      torus.rotation.x += 0.002;
      torus.rotation.y += 0.003;

      const pos = particles.geometry.attributes.position.array as Float32Array;
      for (let i = 0; i < particleCount; i++) {
        pos[i * 3] += velocities[i * 3];
        pos[i * 3 + 1] += velocities[i * 3 + 1];
        pos[i * 3 + 2] += velocities[i * 3 + 2];

        if (pos[i * 3] < -rangeX / 2 || pos[i * 3] > rangeX / 2) velocities[i * 3] *= -1;
        if (pos[i * 3 + 1] < -rangeY / 2 || pos[i * 3 + 1] > rangeY / 2) velocities[i * 3 + 1] *= -1;
        if (pos[i * 3 + 2] < -rangeZ / 2 || pos[i * 3 + 2] > rangeZ / 2) velocities[i * 3 + 2] *= -1;
      }
      particles.geometry.attributes.position.needsUpdate = true;

      let lineIndex = 0;
      const connectionDist = 18;
      for (let i = 0; i < particleCount && lineIndex < maxConnections; i++) {
        for (let j = i + 1; j < particleCount && lineIndex < maxConnections; j++) {
          const dx = pos[i * 3] - pos[j * 3];
          const dy = pos[i * 3 + 1] - pos[j * 3 + 1];
          const dz = pos[i * 3 + 2] - pos[j * 3 + 2];
          const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);

          if (dist < connectionDist) {
            linePositions[lineIndex * 6] = pos[i * 3];
            linePositions[lineIndex * 6 + 1] = pos[i * 3 + 1];
            linePositions[lineIndex * 6 + 2] = pos[i * 3 + 2];
            linePositions[lineIndex * 6 + 3] = pos[j * 3];
            linePositions[lineIndex * 6 + 4] = pos[j * 3 + 1];
            linePositions[lineIndex * 6 + 5] = pos[j * 3 + 2];
            lineIndex++;
          }
        }
      }
      lineGeometry.setDrawRange(0, lineIndex * 2);
      lineGeometry.attributes.position.needsUpdate = true;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      if (container && renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      geometry.dispose();
      material.dispose();
      lineGeometry.dispose();
      lineMaterial.dispose();
      torusGeo.dispose();
      torusMat.dispose();
      renderer.dispose();
    };
  }, [isDark]);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 pointer-events-none z-0 overflow-hidden"
      aria-hidden="true"
    />
  );
}
