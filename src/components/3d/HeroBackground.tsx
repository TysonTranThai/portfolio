"use client";

import * as React from "react";
import * as THREE from "three";
import { useTheme } from "next-themes";

export type BackgroundVisualMode =
  | "wave"
  | "geometry"
  | "matrix"
  | "particles"
  | "minimal";

interface HeroBackgroundProps {
  mode?: BackgroundVisualMode;
}

export function HeroBackground({ mode: propMode }: HeroBackgroundProps) {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";

  const [activeMode, setActiveMode] = React.useState<BackgroundVisualMode>(propMode || "wave");

  // Synchronize mode from prop or custom window event
  React.useEffect(() => {
    if (propMode) {
      setActiveMode(propMode);
    }
  }, [propMode]);

  React.useEffect(() => {
    const handleModeChange = (e: Event) => {
      const customEvent = e as CustomEvent<BackgroundVisualMode>;
      if (customEvent.detail) {
        setActiveMode(customEvent.detail);
      }
    };
    window.addEventListener("hero-bg-mode-change", handleModeChange);
    return () => {
      window.removeEventListener("hero-bg-mode-change", handleModeChange);
    };
  }, []);

  React.useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    if (activeMode === "minimal") {
      // Minimal mode has no WebGL canvas
      return;
    }

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    let animationFrameId: number;
    const width = container.clientWidth || window.innerWidth;
    const height = container.clientHeight || window.innerHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 1000);
    camera.position.z = 75;

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

    // Color tokens
    const primaryColor = isDark ? new THREE.Color("#10b981") : new THREE.Color("#059669");
    const secondaryColor = isDark ? new THREE.Color("#06b6d4") : new THREE.Color("#0284c7");

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

    // ----------------------------------------------------
    // MODE 1: 3D Topographical Wave Mesh
    // ----------------------------------------------------
    let terrainMesh: THREE.Mesh | null = null;
    let terrainGeometry: THREE.PlaneGeometry | null = null;

    if (activeMode === "wave") {
      camera.position.set(0, -25, 45);
      camera.rotation.x = THREE.MathUtils.degToRad(35);

      const gridCols = window.innerWidth < 768 ? 40 : 70;
      const gridRows = window.innerWidth < 768 ? 25 : 45;
      terrainGeometry = new THREE.PlaneGeometry(160, 100, gridCols, gridRows);

      const terrainMaterial = new THREE.MeshBasicMaterial({
        color: primaryColor,
        wireframe: true,
        transparent: true,
        opacity: isDark ? 0.35 : 0.22,
      });

      terrainMesh = new THREE.Mesh(terrainGeometry, terrainMaterial);
      terrainMesh.position.set(0, -15, -10);
      scene.add(terrainMesh);
    }

    // ----------------------------------------------------
    // MODE 2: Floating Holographic Torus Knot
    // ----------------------------------------------------
    let knotMesh: THREE.Mesh | null = null;
    let knotOuterMesh: THREE.Mesh | null = null;

    if (activeMode === "geometry") {
      camera.position.set(0, 0, 80);

      const knotGeo = new THREE.TorusKnotGeometry(18, 4.5, 100, 16, 2, 3);
      const knotMat = new THREE.MeshBasicMaterial({
        color: primaryColor,
        wireframe: true,
        transparent: true,
        opacity: isDark ? 0.32 : 0.2,
      });
      knotMesh = new THREE.Mesh(knotGeo, knotMat);
      knotMesh.position.set(28, 0, -15);
      scene.add(knotMesh);

      const outerRingGeo = new THREE.TorusGeometry(32, 0.4, 16, 80);
      const outerRingMat = new THREE.MeshBasicMaterial({
        color: secondaryColor,
        wireframe: true,
        transparent: true,
        opacity: isDark ? 0.25 : 0.15,
      });
      knotOuterMesh = new THREE.Mesh(outerRingGeo, outerRingMat);
      knotOuterMesh.position.set(28, 0, -15);
      knotOuterMesh.rotation.x = Math.PI / 3;
      scene.add(knotOuterMesh);
    }

    // ----------------------------------------------------
    // MODE 3: Computational Digital Streams / Data Highway
    // ----------------------------------------------------
    let streamLines: THREE.LineSegments | null = null;
    const streamCount = 50;

    if (activeMode === "matrix") {
      camera.position.set(0, 0, 70);
      const streamGeo = new THREE.BufferGeometry();
      const streamPositions = new Float32Array(streamCount * 6);

      for (let i = 0; i < streamCount; i++) {
        const x = (Math.random() - 0.5) * 160;
        const y = (Math.random() - 0.5) * 90;
        const z = (Math.random() - 0.5) * 40;
        const length = Math.random() * 20 + 10;

        streamPositions[i * 6] = x;
        streamPositions[i * 6 + 1] = y;
        streamPositions[i * 6 + 2] = z;

        streamPositions[i * 6 + 3] = x + length;
        streamPositions[i * 6 + 4] = y;
        streamPositions[i * 6 + 5] = z;
      }

      streamGeo.setAttribute("position", new THREE.BufferAttribute(streamPositions, 3));

      const streamMat = new THREE.LineBasicMaterial({
        color: primaryColor,
        transparent: true,
        opacity: isDark ? 0.35 : 0.2,
      });

      streamLines = new THREE.LineSegments(streamGeo, streamMat);
      scene.add(streamLines);
    }

    // ----------------------------------------------------
    // MODE 4: Neural Constellation Particles (Original)
    // ----------------------------------------------------
    let particlesMesh: THREE.Points | null = null;
    let linesMesh: THREE.LineSegments | null = null;
    let particleCount = 0;
    let velocities: Float32Array | null = null;
    const rangeX = 140;
    const rangeY = 80;
    const rangeZ = 50;

    if (activeMode === "particles") {
      particleCount = window.innerWidth < 768 ? 90 : 180;
      const geometry = new THREE.BufferGeometry();
      const positions = new Float32Array(particleCount * 3);
      velocities = new Float32Array(particleCount * 3);

      for (let i = 0; i < particleCount; i++) {
        positions[i * 3] = (Math.random() - 0.5) * rangeX;
        positions[i * 3 + 1] = (Math.random() - 0.5) * rangeY;
        positions[i * 3 + 2] = (Math.random() - 0.5) * rangeZ;

        velocities[i * 3] = (Math.random() - 0.5) * 0.04;
        velocities[i * 3 + 1] = (Math.random() - 0.5) * 0.04;
        velocities[i * 3 + 2] = (Math.random() - 0.5) * 0.02;
      }

      geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));

      const material = new THREE.PointsMaterial({
        color: primaryColor,
        size: 2.2,
        transparent: true,
        opacity: isDark ? 0.65 : 0.45,
        blending: isDark ? THREE.AdditiveBlending : THREE.NormalBlending,
      });

      particlesMesh = new THREE.Points(geometry, material);
      scene.add(particlesMesh);

      const maxConnections = particleCount * 2;
      const linePositions = new Float32Array(maxConnections * 6);
      const lineGeometry = new THREE.BufferGeometry();
      lineGeometry.setAttribute("position", new THREE.BufferAttribute(linePositions, 3));

      const lineMaterial = new THREE.LineBasicMaterial({
        color: primaryColor,
        transparent: true,
        opacity: isDark ? 0.15 : 0.08,
      });

      linesMesh = new THREE.LineSegments(lineGeometry, lineMaterial);
      scene.add(linesMesh);
    }

    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth || window.innerWidth;
      const h = container.clientHeight || window.innerHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener("resize", handleResize);

    const clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      mouseX += (targetMouseX - mouseX) * 0.05;
      mouseY += (targetMouseY - mouseY) * 0.05;

      // Animate Wave Mode
      if (activeMode === "wave" && terrainGeometry && terrainMesh) {
        const posAttr = terrainGeometry.attributes.position;
        const posArray = posAttr.array as Float32Array;

        for (let i = 0; i < posArray.length; i += 3) {
          const u = posArray[i];
          const v = posArray[i + 1];
          // Dynamic sine + cosine wave formulation with mouse response
          const z =
            Math.sin(u * 0.06 + elapsedTime * 1.5) * 4.5 +
            Math.cos(v * 0.08 + elapsedTime * 1.2) * 3.5 +
            Math.sin((u + v) * 0.04 + elapsedTime * 0.8) * 2.0;

          posArray[i + 2] = z;
        }

        posAttr.needsUpdate = true;
        terrainMesh.rotation.z = mouseX * 0.3;
        camera.position.x = mouseX * 10;
        camera.position.y = -25 - mouseY * 8;
      }

      // Animate Geometry Mode
      if (activeMode === "geometry" && knotMesh && knotOuterMesh) {
        knotMesh.rotation.x += 0.004;
        knotMesh.rotation.y += 0.007;
        knotMesh.rotation.z += 0.002;

        knotOuterMesh.rotation.x += 0.002;
        knotOuterMesh.rotation.y -= 0.004;

        camera.position.x = mouseX * 6;
        camera.position.y = -mouseY * 6;
        camera.lookAt(scene.position);
      }

      // Animate Matrix Streams Mode
      if (activeMode === "matrix" && streamLines) {
        const streamPos = streamLines.geometry.attributes.position.array as Float32Array;
        for (let i = 0; i < streamCount; i++) {
          streamPos[i * 6] += 0.6; // move right
          streamPos[i * 6 + 3] += 0.6;

          if (streamPos[i * 6] > 80) {
            streamPos[i * 6] = -80;
            streamPos[i * 6 + 3] = -80 + (Math.random() * 20 + 10);
          }
        }
        streamLines.geometry.attributes.position.needsUpdate = true;
        camera.position.x = mouseX * 4;
        camera.position.y = -mouseY * 4;
      }

      // Animate Particles Mode
      if (activeMode === "particles" && particlesMesh && velocities) {
        const pos = particlesMesh.geometry.attributes.position.array as Float32Array;
        for (let i = 0; i < particleCount; i++) {
          pos[i * 3] += velocities[i * 3];
          pos[i * 3 + 1] += velocities[i * 3 + 1];
          pos[i * 3 + 2] += velocities[i * 3 + 2];

          if (pos[i * 3] < -rangeX / 2 || pos[i * 3] > rangeX / 2) velocities[i * 3] *= -1;
          if (pos[i * 3 + 1] < -rangeY / 2 || pos[i * 3 + 1] > rangeY / 2) velocities[i * 3 + 1] *= -1;
          if (pos[i * 3 + 2] < -rangeZ / 2 || pos[i * 3 + 2] > rangeZ / 2) velocities[i * 3 + 2] *= -1;
        }
        particlesMesh.geometry.attributes.position.needsUpdate = true;

        if (linesMesh) {
          const linePositions = linesMesh.geometry.attributes.position.array as Float32Array;
          let lineIndex = 0;
          const maxConnections = particleCount * 2;
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
          linesMesh.geometry.setDrawRange(0, lineIndex * 2);
          linesMesh.geometry.attributes.position.needsUpdate = true;
        }

        camera.position.x = mouseX * 2;
        camera.position.y = -mouseY * 2;
      }

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
      scene.clear();
      renderer.dispose();
    };
  }, [isDark, activeMode]);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 pointer-events-none z-0 overflow-hidden"
      aria-hidden="true"
    />
  );
}
