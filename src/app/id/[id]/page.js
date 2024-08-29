"use client";
import * as THREE from "three";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { Canvas, extend, useThree, useFrame } from "@react-three/fiber";
import {
    useGLTF,
    useTexture,
    Environment,
    Lightformer,
    Text,
} from "@react-three/drei";
import {
    BallCollider,
    CuboidCollider,
    Physics,
    RigidBody,
    useRopeJoint,
    useSphericalJoint,
} from "@react-three/rapier";
import { MeshLineGeometry, MeshLineMaterial } from "meshline";
import { LinkedInShareButton, TwitterShareButton } from "./CopyButton";
import axios from "axios";
import { useRouter } from "next/navigation";

extend({ MeshLineGeometry, MeshLineMaterial });
useGLTF.preload(
    "https://assets.vercel.com/image/upload/contentful/image/e5382hct74si/5huRVDzcoDwnbgrKUo1Lzs/53b6dd7d6b4ffcdbd338fa60265949e1/tag.glb"
);
useTexture.preload(
    "https://assets.vercel.com/image/upload/contentful/image/e5382hct74si/SOT1hmCesOHxEYxL7vkoZ/c57b29c85912047c414311723320c16b/band.jpg"
);

export default function Page({ params }) {
    const uid = params.id;
    const ISSERVER = typeof window === "undefined";

    if (!ISSERVER) {
        // Access localStorage
        localStorage?.setItem("uid", uid);
    }

    const [userName, setUserName] = useState("");
    const [noUser, setNoUser] = useState(true);
    const [selfReferral, setSelfReferral] = useState("");

    const fetchUser = async () => {
        try {
            const res = await axios.post(
                process.env.NEXT_PUBLIC_API_URL + "/user",
                {
                    id: uid,
                }
            );
            const userData = res.data.user;
            if (userData) {
                setNoUser(false);
            }
            setUserName(
                userData.firstName.trim() + " " + userData.lastName.trim()
            );
            setSelfReferral(userData.selfReferral);
        } catch (error) {
            console.log(error);
        }
    };

    useLayoutEffect(() => {
        fetchUser();
    }, []);

    return noUser ? (
        <div className="flex flex-col items-center justify-center min-h-screen bg-[#634752] p-4">
            <h1 className="text-[#fff6e0] text-2xl font-bold">
                It seems like you are not registered.
            </h1>
            <div className="flex gap-6 mt-8">
                <a
                    href="https://www.hackquest.io/en/hackathon/explore/HackOdisha-40"
                    className="p-2 px-4 bg-[#e56e00] text-[#fff6e0] rounded hover:bg-[#634752] hover:text-[#fff6e0] transition hover:border-[#e56e00] border-2"
                >
                    Register
                </a>
                <button
                    onClick={() => router.back()}
                    className="p-2 px-4 bg-[#e56e00] text-[#fff6e0] rounded hover:bg-[#634752] hover:text-[#fff6e0] transition hover:border-[#e56e00] border-2 "
                >
                    Back
                </button>
            </div>
        </div>
    ) : (
        <div className="relative w-screen h-screen bg-black">
            <Canvas camera={{ position: [0, 0, 13], fov: 25 }}>
                <ambientLight intensity={Math.PI} />
                <Physics interpolate gravity={[0, -40, 0]} timeStep={1 / 60}>
                    <Band name={userName || "HO4 HACKER"} />
                </Physics>
                <Environment background blur={0.75}>
                    <color attach="background" args={["black"]} />
                    <Lightformer
                        intensity={2}
                        color="white"
                        position={[0, -1, 5]}
                        rotation={[0, 0, Math.PI / 3]}
                        scale={[100, 0.1, 1]}
                    />
                    <Lightformer
                        intensity={3}
                        color="white"
                        position={[-1, -1, 1]}
                        rotation={[0, 0, Math.PI / 3]}
                        scale={[100, 0.1, 1]}
                    />
                    <Lightformer
                        intensity={3}
                        color="white"
                        position={[1, 1, 1]}
                        rotation={[0, 0, Math.PI / 3]}
                        scale={[100, 0.1, 1]}
                    />
                    <Lightformer
                        intensity={10}
                        color="white"
                        position={[-10, 0, 14]}
                        rotation={[0, Math.PI / 2, Math.PI / 3]}
                        scale={[100, 10, 1]}
                    />
                </Environment>
            </Canvas>
            <div className="absolute bottom-12 w-screen justify-center flex gap-12">
                <div className="share-btn">
                    <TwitterShareButton referral={selfReferral} />
                </div>
                <div className="share-btn">
                    <LinkedInShareButton />
                </div>
            </div>
        </div>
    );
}

function Band({ name, maxSpeed = 50, minSpeed = 10 }) {
    const band = useRef(), fixed = useRef(), j1 = useRef(), j2 = useRef(), j3 = useRef(), card = useRef() // prettier-ignore
    const vec = new THREE.Vector3(), ang = new THREE.Vector3(), rot = new THREE.Vector3(), dir = new THREE.Vector3() // prettier-ignore
    const segmentProps = {
        type: "dynamic",
        canSleep: true,
        colliders: false,
        angularDamping: 2,
        linearDamping: 2,
    };
    const { nodes, materials } = useGLTF(
        "https://assets.vercel.com/image/upload/contentful/image/e5382hct74si/5huRVDzcoDwnbgrKUo1Lzs/53b6dd7d6b4ffcdbd338fa60265949e1/tag.glb"
    );
    const texture = useTexture("/images/webwiz.svg");
    const { width, height } = useThree((state) => state.size);
    const [curve] = useState(
        () =>
            new THREE.CatmullRomCurve3([
                new THREE.Vector3(),
                new THREE.Vector3(),
                new THREE.Vector3(),
                new THREE.Vector3(),
            ])
    );
    const [dragged, drag] = useState(false);
    const [hovered, hover] = useState(false);
    const customCardTexture = useTexture("/images/ho4_3.svg");

    useRopeJoint(fixed, j1, [[0, 0, 0], [0, 0, 0], 1]) // prettier-ignore
    useRopeJoint(j1, j2, [[0, 0, 0], [0, 0, 0], 1]) // prettier-ignore
    useRopeJoint(j2, j3, [[0, 0, 0], [0, 0, 0], 1]) // prettier-ignore
    useSphericalJoint(j3, card, [[0, 0, 0], [0, 1.45, 0]]) // prettier-ignore

    useEffect(() => {
        if (hovered) {
            document.body.style.cursor = dragged ? "grabbing" : "grab";
            return () => void (document.body.style.cursor = "auto");
        }
    }, [hovered, dragged]);

    useFrame((state, delta) => {
        if (dragged) {
            vec.set(state.pointer.x, state.pointer.y, 0.5).unproject(
                state.camera
            );
            dir.copy(vec).sub(state.camera.position).normalize();
            vec.add(dir.multiplyScalar(state.camera.position.length()));
            [card, j1, j2, j3, fixed].forEach((ref) => ref.current?.wakeUp());
            card.current?.setNextKinematicTranslation({
                x: vec.x - dragged.x,
                y: vec.y - dragged.y,
                z: vec.z - dragged.z,
            });
        }
        if (fixed.current) {
            // Fix most of the jitter when over pulling the card
            [j1, j2].forEach((ref) => {
                if (!ref.current.lerped)
                    ref.current.lerped = new THREE.Vector3().copy(
                        ref.current.translation()
                    );
                const clampedDistance = Math.max(
                    0.1,
                    Math.min(
                        1,
                        ref.current.lerped.distanceTo(ref.current.translation())
                    )
                );
                ref.current.lerped.lerp(
                    ref.current.translation(),
                    delta * (minSpeed + clampedDistance * (maxSpeed - minSpeed))
                );
            });
            // Calculate catmul curve
            curve.points[0].copy(j3.current.translation());
            curve.points[1].copy(j2.current.lerped);
            curve.points[2].copy(j1.current.lerped);
            curve.points[3].copy(fixed.current.translation());
            band.current.geometry.setPoints(curve.getPoints(32));
            // Tilt it back towards the screen
            ang.copy(card.current.angvel());
            rot.copy(card.current.rotation());
            card.current.setAngvel({
                x: ang.x,
                y: ang.y - rot.y * 0.25,
                z: ang.z,
            });
        }
    });

    curve.curveType = "chordal";
    texture.wrapS = texture.wrapT = THREE.RepeatWrapping;

    return (
        <>
            <group position={[0, 4, 0]}>
                <RigidBody ref={fixed} {...segmentProps} type="fixed" />
                <RigidBody position={[0.5, 0, 0]} ref={j1} {...segmentProps}>
                    <BallCollider args={[0.1]} />
                </RigidBody>
                <RigidBody position={[1, 0, 0]} ref={j2} {...segmentProps}>
                    <BallCollider args={[0.1]} />
                </RigidBody>
                <RigidBody position={[1.5, 0, 0]} ref={j3} {...segmentProps}>
                    <BallCollider args={[0.1]} />
                </RigidBody>
                <RigidBody
                    position={[2, 0, 0]}
                    ref={card}
                    {...segmentProps}
                    type={dragged ? "kinematicPosition" : "dynamic"}
                >
                    <CuboidCollider args={[0.8, 1.125, 0.01]} />
                    <group
                        scale={2.25}
                        position={[0, -1.2, -0.05]}
                        onPointerOver={() => hover(true)}
                        onPointerOut={() => hover(false)}
                        onPointerUp={(e) => (
                            e.target.releasePointerCapture(e.pointerId),
                            drag(false)
                        )}
                        onPointerDown={(e) => (
                            e.target.setPointerCapture(e.pointerId),
                            drag(
                                new THREE.Vector3()
                                    .copy(e.point)
                                    .sub(vec.copy(card.current.translation()))
                            )
                        )}
                    >
                        <mesh geometry={nodes.card.geometry}>
                            <meshPhysicalMaterial
                                map={customCardTexture}
                                map-anisotropy={16}
                                clearcoat={1}
                                clearcoatRoughness={0.15}
                                roughness={0.3}
                                metalness={0.5}
                            />
                        </mesh>
                        <mesh
                            geometry={nodes.clip.geometry}
                            material={materials.metal}
                            material-roughness={0.3}
                        />
                        <mesh
                            geometry={nodes.clamp.geometry}
                            material={materials.metal}
                        />

                        {/* Add the Text component to render the dynamic name */}
                        <Text
                            position={[0, 0.2, 0.01]} // Adjust this position based on where you want the text
                            rotation={[0, 0, 0]} // Adjust rotation if needed
                            fontSize={0.05}
                            color="white"
                            anchorX="center"
                            anchorY="middle"
                            fontWeight="bold"
                            maxWidth={0.6}
                            font="/dl.ttf"
                        >
                            {name}
                        </Text>
                    </group>
                </RigidBody>
            </group>
            <mesh ref={band}>
                <meshLineGeometry />
                <meshLineMaterial
                    color="white"
                    depthTest={false}
                    resolution={[width, height]}
                    useMap
                    map={texture}
                    repeat={[-3, 1]}
                    lineWidth={1}
                />
            </mesh>
        </>
    );
}
