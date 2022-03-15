/* ------------------------------------ */
// Navbar data section
/* ------------------------------------ */
import LogoImageStick from "common/assets/image/header-logo.svg";
const MENU_ITEMS = [];

export const NavabarData = {
  logo: LogoImageStick,
  navItems: MENU_ITEMS,
  button: {
    link: "https://discord.com/invite/aXJFGgcvUk",
    text: "COMMUNITY",
  },
};

/* ------------------------------------ */
// Banner data section
/* ------------------------------------ */
import bannerMoc from "common/assets/image/main.svg";
import logoBackgroundImage from "common/assets/image/partial-logo.svg";

export const BannerData = {
  image: bannerMoc,
  logo: LogoImageStick,
  rightImage: logoBackgroundImage,
  title: "The SkillWallet Roadmap",
  paragraphs: [
    "Lorem ipsum dolor sit amet, ",
    "consetetur sadipscing elitr, sed",
  ],
};

/* ------------------------------------ */
// Upgrades data section
/* ------------------------------------ */
import upgradeInProgressIcon1 from "common/assets/image/upgrades/progress/upgrade-1.svg";
import upgradeInProgressIcon2 from "common/assets/image/upgrades/progress/upgrade-2.svg";
import upgradeInProgressIcon3 from "common/assets/image/upgrades/progress/upgrade-3.svg";
import upgradeInProgressIcon4 from "common/assets/image/upgrades/progress/upgrade-4.svg";
import upgradeInProgressIcon5 from "common/assets/image/upgrades/progress/upgrade-5.svg";
import upgradeInProgressIcon6 from "common/assets/image/upgrades/progress/upgrade-6.svg";

import upgradeCompleteIcon1 from "common/assets/image/upgrades/complete/upgrade-1.svg";
import upgradeCompleteIcon2 from "common/assets/image/upgrades/complete/upgrade-2.svg";
import upgradeCompleteIcon3 from "common/assets/image/upgrades/complete/upgrade-3.svg";
import upgradeCompleteIcon4 from "common/assets/image/upgrades/complete/upgrade-4.svg";
import upgradeCompleteIcon5 from "common/assets/image/upgrades/complete/upgrade-5.svg";
import upgradeCompleteIcon6 from "common/assets/image/upgrades/complete/upgrade-6.svg";

const upgradeIcons = ({ complete = false, id }) => {
  if (complete) {
    switch (id) {
      case 1:
        return {
          icon: upgradeCompleteIcon1,
        };
      case 2:
        return {
          icon: upgradeCompleteIcon2,
        };
      case 3:
        return {
          icon: upgradeCompleteIcon3,
        };
      case 4:
        return {
          icon: upgradeCompleteIcon4,
        };
      case 5:
        return {
          icon: upgradeCompleteIcon5,
        };
      case 6:
        return {
          icon: upgradeCompleteIcon6,
        };
    }
  } else {
    switch (id) {
      case 1:
        return {
          icon: upgradeInProgressIcon1,
        };
      case 2:
        return {
          icon: upgradeInProgressIcon2,
        };
      case 3:
        return {
          icon: upgradeInProgressIcon3,
        };
      case 4:
        return {
          icon: upgradeInProgressIcon4,
        };
      case 5:
        return {
          icon: upgradeInProgressIcon5,
        };
      case 6:
        return {
          icon: upgradeInProgressIcon6,
        };
    }
  }
};

const upgrateItem = ({
  id,
  description,
  complete = false,
  completeOn = null,
  title,
}) => {
  return {
    ...upgradeIcons({ complete, id }),
    id,
    title,
    complete,
    completeOn: complete && completeOn ? `Launched ${completeOn}` : null,
    description,
  };
};

export const UpgradesData = {
  items: [
    upgrateItem({
      id: 1,
      complete: false,
      completeOn: null, // 02-02-2020
      title: "Mutual Credit",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged",
    }),
    upgrateItem({
      id: 2,
      complete: false,
      completeOn: null,
      title: "Voting + Commitment",
      description:
        "Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
    }),
    upgrateItem({
      id: 3,
      complete: false,
      completeOn: null,
      title: "On-Chain Analytics",
      description:
        "Lorem ipsum dolor sit amet, Quisque rhoncus sed enimd interdum mauris pendisse et phare.",
    }),
    upgrateItem({
      id: 4,
      complete: false,
      completeOn: null,
      title: "Quadratic Treasury",
      description:
        "Lorem ipsum dolor sit amet, Quisque rhoncus sed enimd interdum mauris pendisse et phare.",
    }),
    upgrateItem({
      id: 5,
      complete: false,
      completeOn: null,
      title: "Token Launch",
      description:
        "Lorem ipsum dolor sit amet, Quisque rhoncus sed enimd interdum mauris pendisse et phare.",
    }),
    upgrateItem({
      id: 6,
      complete: false,
      completeOn: null,
      title: "Profit-Sharing Network",
      description:
        "Lorem ipsum dolor sit amet, Quisque rhoncus sed enimd interdum mauris pendisse et phare.",
    }),
  ],
};

/* ------------------------------------ */
// FOOTER data section
/* ------------------------------------ */
import footerLogo from "common/assets/image/logo-footer.svg";
import footerDiscord from "common/assets/image/discord-social.svg";
import footerGithub from "common/assets/image/github-social.svg";
import footerTwitter from "common/assets/image/twitter-social.svg";
import footerMedium from "common/assets/image/medium-social.svg";

export const FooterData = {
  menu: [],
  logo: footerLogo,
  copyright: `Copyright © ${new Date().getFullYear()}, SkillWallet.`,
  social: [
    {
      link: "https://discord.gg/jntyjSvFZd",
      icon: footerDiscord,
    },
    {
      link: "https://twitter.com/SkillWalletID",
      icon: footerTwitter,
    },
    {
      link: "https://blog.skillwallet.id",
      icon: footerMedium,
    },
    {
      link: "https://github.com/SkillWallet",
      icon: footerGithub,
    },
  ],
};
