import "@/styles/global.css";
import type { Metadata, Viewport } from "next";
import React from "react";
import { MediaQueriesIndicator } from "@/components/debug/media-queries";
import { Header } from "@/components/layout/header";
import { UmamiTracking } from "@/components/tracking/umami";
import { SITE_CONFIG } from "@/config/site";
import { fontSans } from "@/lib/font";
import { ogImage } from "@/utils/og-image";

const BottomNavigation = React.lazy(
	() => import("@/components/layout/bottom-navigation"),
);

export const viewport: Viewport = {
	colorScheme: "dark",
	themeColor: "#0E0F0F",
	width: "device-width",
	initialScale: 1,
	viewportFit: "cover",
};

export const generateMetadata = async (): Promise<Metadata> => {
	return {
		metadataBase: new URL(SITE_CONFIG.url),
		title: { default: SITE_CONFIG.name, template: `%s // ${SITE_CONFIG.name}` },
		description: SITE_CONFIG.description,
		applicationName: SITE_CONFIG.name,
		keywords: SITE_CONFIG.keywords,
		openGraph: {
			type: "website",
			title: SITE_CONFIG.name,
			description: SITE_CONFIG.description,
			siteName: SITE_CONFIG.name,
			url: SITE_CONFIG.url,
			images: [
				{
					url: ogImage(SITE_CONFIG.name),
					width: 1200,
					height: 630,
					alt: SITE_CONFIG.name,
				},
			],
		},
		twitter: {
			card: "summary_large_image",
			title: SITE_CONFIG.name,
			description: SITE_CONFIG.description,
			images: [
				{
					url: ogImage(SITE_CONFIG.name),
					width: 1200,
					height: 630,
				},
			],
			creator: SITE_CONFIG.twitter,
		},
		icons: {
			icon: "/favicon.ico",
			shortcut: "/favicon-16x16.png",
			apple: "/apple-touch-icon.png",
		},
		manifest: `${SITE_CONFIG.url}/site.webmanifest`,
	};
};

const RootLayout = async ({ children }: React.PropsWithChildren) => {
	return (
		<html lang="en" suppressHydrationWarning>
			<body className={fontSans.variable}>
				<Header />

				{children}

				<BottomNavigation />

				<MediaQueriesIndicator />

				<UmamiTracking />
			</body>
		</html>
	);
};

export default RootLayout;
