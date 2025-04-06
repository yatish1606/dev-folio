import { useEffect, useState } from "react";
import Portfolio from "./pages/portfolio/Portfolio";
import About from "./pages/about/About";
import { motion } from "framer-motion";
import workExperienceList from "./data/work-experience";
import portfolioData from "./data/portfolio";
import { playItems } from "./data/play";
import crispyHero from "./assets/showcase/crispy/crispy-hero.png";
import IRCTCHome from "./assets/showcase/irctc/Home.svg";
import IRCTCHero from "./assets/showcase/irctc/IRCTC Hero.svg";
import IRCTCListingTrain from "./assets/showcase/irctc/Listing.svg";
import IRCTCBookingTrain from "./assets/showcase/irctc/Selecting a train.svg";
import qubedoDeploy from "./assets/showcase/qubedo/qubedo-deploy.png";
import qubedoNewComponent from "./assets/showcase/qubedo/qubedo-newcomponent.png";
import qubedoPreferences from "./assets/showcase/qubedo/qubedo-preferences.png";
import qubedoProfile from "./assets/showcase/qubedo/qubedo-profile.png";
import qubedoVideo from "./assets/showcase/qubedo/qubedo_demo.mov";
import UEICompBar from "./assets/showcase/uei/Comp_bar.svg";
import UEICompBill from "./assets/showcase/uei/Comp_bill.svg";
import UEICompChart from "./assets/showcase/uei/Comp_chart.svg";
import UEICompLocation from "./assets/showcase/uei/Comp_location.svg";
import UEICompRoom from "./assets/showcase/uei/Comp_room.svg";
import UEICompSwipe from "./assets/showcase/uei/Comp_swipe.svg";
import UEIDashboard from "./assets/showcase/uei/Dashboard.svg";
import UEIHero from "./assets/showcase/uei/UEI_Hero.mov";
import UEIHeroMobile from "./assets/showcase/uei/UEI_hero_mobile.mov";
import SFProRegular from "./assets/fonts/SF-Pro-Display-Regular.otf";
import SFProBold from "./assets/fonts/SF-Pro-Display-Semibold.otf";
import SFProMedium from "./assets/fonts/SF-Pro-Display-Medium.otf";
import SFProText from "./assets/fonts/SF-Pro-Text-Light.otf";
import SFProTextMedium from "./assets/fonts/SF-Pro-Text-Medium.otf";
import SFProTextRegular from "./assets/fonts/SF-Pro-Text-Regular.otf";

const quotes = [
  "Loading… because good things take time (and a bit of JavaScript).",
  "If you can read this, my site is still loading. <br /> Awkward.",
  "If loading screens had Oscars, this one would win for Best Patience Test.",
  "Almost there! This site loads faster than your Monday motivation.",
  "Almost there! Just bribing the internet hamsters to run faster.",
  "",
];

const showCaseAssets = [
  crispyHero,
  IRCTCBookingTrain,
  IRCTCHero,
  IRCTCHome,
  IRCTCListingTrain,
  qubedoDeploy,
  qubedoNewComponent,
  qubedoPreferences,
  qubedoProfile,
  UEICompBar,
  UEICompBill,
  UEICompChart,
  UEICompLocation,
  UEICompRoom,
  UEICompSwipe,
  UEIDashboard,
];

const fonts = [
  SFProRegular,
  SFProBold,
  SFProMedium,
  SFProText,
  SFProTextMedium,
  SFProTextRegular,
];

const assets = [
  ...workExperienceList.map((item) => {
    return { href: item.companyLogo, type: "image" };
  }),
  ...portfolioData["2024"].map((item) => {
    return { href: item.thumbnailVideo, type: "video" };
  }),
  ...playItems.map((item) => {
    return { href: item.image, type: "image" };
  }),
  ...showCaseAssets.map((item) => {
    return { href: item, type: "image" };
  }),
  ...fonts.map((item) => {
    return { href: item, type: "font" };
  }),
  { href: qubedoVideo, type: "video" },
  { href: UEIHero, type: "video" },
  { href: UEIHeroMobile, type: "video" },
];

const loadAsset = (url: string, type: string): Promise<any> => {
  return new Promise((resolve, reject) => {
    if (type === "image" || url.endsWith(".png") || url.endsWith(".jpg")) {
      const image = new Image();
      image.onload = () => resolve(url);
      image.onerror = () =>
        reject(new Error(`Failed to load image from ${url}`));
      image.src = url;
    } else if (type === "video") {
      const video = document.createElement("video");
      video.onloadedmetadata = () => resolve(url);
      video.onerror = () =>
        reject(new Error(`Failed to load video from ${url}`));
      video.src = url;
    } else if (
      type === "font" ||
      url.endsWith(".woff") ||
      url.endsWith(".woff2") ||
      url.endsWith(".ttf") ||
      url.endsWith(".otf")
    ) {
      const font = new FontFace(url, `url(${url})`);
      font
        .load()
        .then((loadedFont) => {
          document.fonts.add(loadedFont);
          resolve(url);
        })
        .catch(() => reject(new Error(`Failed to load font from ${url}`)));
    } else {
      reject(new Error(`Unsupported asset type: ${type}`));
    }
  });
};

function preventScroll(event: any) {
  event.preventDefault();
}

function disableScroll() {
  document.addEventListener("wheel", preventScroll, { passive: false });
  document.addEventListener("touchmove", preventScroll, { passive: false });
  document.addEventListener("keydown", preventArrowScroll, false);
}

function enableScroll() {
  document.removeEventListener("wheel", preventScroll);
  document.removeEventListener("touchmove", preventScroll);
  document.removeEventListener("keydown", preventArrowScroll);
}

function preventArrowScroll(event: any) {
  const keys = ["ArrowUp", "ArrowDown", "PageUp", "PageDown", "Space"];
  if (keys.includes(event.key)) {
    event.preventDefault();
  }
}

const quote = quotes[Math.floor(Math.random() * quotes.length)];

const App = () => {
  const [loading, setLoading] = useState(true);
  const loadAssets = async () => {
    try {
      await Promise.all(
        assets.map((asset) => loadAsset(asset.href, asset.type))
      );
    } catch (exception) {
      console.error("Failed to load all assets:", exception);
    }
  };
  useEffect(() => {
    disableScroll();

    loadAssets().finally(() => {
      setTimeout(() => {
        setLoading(false);
        enableScroll();
      }, 100);
    });
  }, []);

  return (
    <div>
      <div
        className={loading ? "show loader-container" : "hide loader-container"}
      >
        <div className="loader"></div>
        <motion.p
          // initial={{ opacity: 0, y: 0 }}
          // animate={{ opacity: 1, y: 0 }}
          // transition={{ duration: 0.5, damping: 0.5, delay: 0.25 }}
          className="large-text text-gray1"
        >
          <span
            className="text-gray2"
            dangerouslySetInnerHTML={{ __html: quote }}
          ></span>
        </motion.p>
      </div>

      <Portfolio />
      <About />

      {/* <FloatingDock items={items} /> */}
    </div>
  );
};

export default App;
