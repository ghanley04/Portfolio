import React, { useState, useEffect, useLayoutEffect, useRef } from "react";
import { Helmet } from "react-helmet";
import { Link } from 'react-router-dom';
import { FaLocationDot, FaLink } from "react-icons/fa6";

import Logo from "../components/common/logo";
import Footer from "../components/common/footer";
import NavBar from "../components/common/navBar";
import AllProjects from "../components/projects/allProjects";
import Experience from "../components/experience/experience";
import AboutMe from "../components/aboutMe/aboutMe";
import Contact from "../components/contact/contact";

import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/homepage.css";

// clamp helper
const clamp = (v, min, max) => Math.min(max, Math.max(min, v));

const Homepage = () => {
	// 0 at the very top (big centred name) → 1 once the name has collapsed into
	// its settled header position. The name is ONE element the whole time.
	const [progress, setProgress] = useState(0);
	const pageRef = useRef(null);

	// The hero runway (gives the collapse its scroll distance) and the single
	// name element. We measure the name at its settled size, then compute the
	// transform that blows it up to the centred hero — the exact inverse, so at
	// progress 1 the transform is identity and the name simply *is* the title.
	const heroRef = useRef(null);
	const nameRef = useRef(null);
	const [big, setBig] = useState({ s: 3, tx: 0, ty: 0 });

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	useEffect(() => {
		let raf = null;

		const update = () => {
			raf = null;
			const heroEl = heroRef.current;
			if (!heroEl) return;
			// How far we've scrolled into the sticky runway, 0 → 1. The runway is
			// the hero's height beyond one viewport (the distance it stays pinned).
			const runway = Math.max(heroEl.offsetHeight - window.innerHeight, 1);
			const scrolled = -heroEl.getBoundingClientRect().top;
			const p = clamp(scrolled / runway, 0, 1);
			setProgress(p);
			if (pageRef.current) {
				pageRef.current.style.setProperty("--side-scale", p.toFixed(3));
				// Reveal the navbar only once the name has essentially settled.
				pageRef.current.classList.toggle("nav-shown", p > 0.92);
			}
		};

		const handleScroll = () => {
			if (raf === null) raf = window.requestAnimationFrame(update);
		};

		update();
		window.addEventListener("scroll", handleScroll, { passive: true });
		window.addEventListener("resize", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
			window.removeEventListener("resize", handleScroll);
			if (raf !== null) window.cancelAnimationFrame(raf);
		};
	}, []);

	// Measure the name at its settled (identity) size/position, then work out the
	// transform that scales it up and centres it in the viewport for progress 0.
	useLayoutEffect(() => {
		const measure = () => {
			const nameEl = nameRef.current;
			if (!nameEl) return;

			const prev = nameEl.style.transform;
			nameEl.style.transform = "none";
			// Measure the actual text (the line elements are content-sized) rather
			// than the h1 box, which stretches to the column width.
			const box = nameEl.getBoundingClientRect();
			const lines = nameEl.querySelectorAll(".hero-name-line");
			let textW = 0;
			let top = Infinity;
			let bottom = -Infinity;
			lines.forEach((el) => {
				const b = el.getBoundingClientRect();
				textW = Math.max(textW, b.width);
				top = Math.min(top, b.top);
				bottom = Math.max(bottom, b.bottom);
			});
			nameEl.style.transform = prev;
			if (!textW || bottom <= top) return;

			const vw = window.innerWidth;
			const vh = window.innerHeight;
			const textH = bottom - top;

			// Intro size: a little larger than the settled title. Grow toward a
			// fraction of the viewport, capped by height, and never smaller.
			const s = Math.max(
				1.4,
				Math.min((vw * 0.46) / textW, (vh * 0.62) / textH)
			);
			// Keep the name left-aligned — it stays at its settled left edge and
			// simply scales in place (no horizontal slide). Vertically centre it
			// for the intro; it eases up to the settled position as you scroll.
			const tx = 0;
			const naturalCenter = top + textH / 2;
			const ty = vh / 2 - box.top - (naturalCenter - box.top) * s;

			setBig({ s, tx, ty });
		};

		measure();
		window.addEventListener("resize", measure);
		if (document.fonts && document.fonts.ready) {
			document.fonts.ready.then(measure).catch(() => {});
		}
		return () => window.removeEventListener("resize", measure);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "home");

	const p = progress;

	// Interpolate the single name from big+centred (p=0) to settled (p=1).
	const curScale = big.s + (1 - big.s) * p;
	const nameStyle = {
		transform: `translate3d(${(big.tx * (1 - p)).toFixed(2)}px, ${(
			big.ty *
			(1 - p)
		).toFixed(2)}px, 0) scale(${curScale.toFixed(4)})`,
	};

	// At the top the two names sit tightly stacked; as you scroll they ease
	// apart into the settled gap. Pull the last name up toward the first at
	// p=0 (in em, so it tracks the current font size), easing to 0 at p=1.
	const lastNameStyle = {
		transform: `translateY(${(-0.28 * (1 - p)).toFixed(3)}em)`,
	};

	// Hero decoration fades as the name settles; the subtitle fades in.
	const auraStyle = { opacity: clamp(1 - p / 0.8, 0, 1) };
	const hintStyle = { opacity: clamp(1 - p / 0.25, 0, 1) };
	const subtitleStyle = { opacity: clamp((p - 0.9) / 0.1, 0, 1) };

	return (
		<React.Fragment>
			<Helmet>
				<title>{INFO.main.title}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>

			<div className="page-content homepage-root" ref={pageRef}>
				<NavBar active="home" />

				{/* Scroll-driven intro. The hero is a sticky runway: it stays
				    pinned while you scroll through it, and the single name element
				    collapses from a big centred hero into its settled header
				    position. Content below scrolls up to meet it, so nothing blank
				    is ever revealed and there is only ever one name in the DOM. */}
				<section className="hero" ref={heroRef}>
					<div className="hero-sticky">
						<div
							className="hero-aura"
							style={auraStyle}
							aria-hidden="true"
						/>

						<div className="hero-head" id="home-home">
							<h1 className="hero-name" ref={nameRef} style={nameStyle}>
								<span className="hero-name-line">GILLIAN</span>
								<span className="hero-name-line" style={lastNameStyle}>HANLEY</span>
							</h1>

							<div className="hero-subtitle" style={subtitleStyle}>
								<div className="inline-item">
									Designer, Developer, and Student
								</div>
								<div className="inline-group">
									<div className="inline-item">
										<FaLocationDot className="#" />
										St. Louis, MO
									</div>
									<div className="inline-item">
										<a href="/pdf/Gillian_Hanley_Resume.pdf" className="resume-link-text" target="_blank" rel="noopener noreferrer">
											<FaLink />
											View my Resume</a>
									</div>
								</div>
							</div>
						</div>

						<div className="hero-scroll-hint" style={hintStyle}>scroll ↓</div>
					</div>
				</section>

				<div className="content-wrapper">
					<div className="homepage-container">
						<div className="container homepage-projects" id="home-projects">
							<AllProjects />
						</div>

						<div className="container homepage-experience" id="home-experience">
							<Experience />
						</div>

						<div className="container homepage-aboutme" id="home-about">
							<AboutMe />
						</div>

						<div className="container homepage-contact" id="home-contact">
							<Contact />
						</div>

						<div className="page-footer">
							<Footer />
						</div>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Homepage;
