"use client";
import dynamic from "next/dynamic";

const DynamicVideoUI = dynamic(() => import("./video-ui-kit"), { ssr: true });

export default function VideoCall() {
	return <DynamicVideoUI />;
}