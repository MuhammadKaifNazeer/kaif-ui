import EmogiNav from '@/components/kaif-ui/ui/emogiNav'; 

// get animated emogies from: https://googlefonts.github.io/noto-emoji-animation/

const navItems = [
    {
        label: "Home",
        href: "#",
        emogi: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f60d/512.gif",
        alt: "😍",
    },
    {
        label: "About",
        href: "#",
        emogi: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f604/512.gif",
        alt: "😄",
    },
    {
        label: "Work",
        href: "#",
        emogi: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f618/512.gif",
        alt: "😘",
    },
    {
        label: "Services",
        href: "#",
        emogi: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f911/512.gif",
        alt: "🤑",
    },
    {
        label: "Our Team",
        href: "#",
        emogi: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f973/512.gif",
        alt: "🥳",
    },
    {
        label: "Contact",
        href: "#",
        emogi: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f47b/512.gif",
        alt: "👻",
    },
];

const EmogiNavigation: React.FC = () => {
    return (
        <div>
            <EmogiNav navItems={navItems} />
        </div>
    );
};

export default EmogiNavigation;
