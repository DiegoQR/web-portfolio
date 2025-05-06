import React from 'react';
import { 
    DiHtml5,
    DiCss3,
    DiJsBadge,
    DiReact,
    DiNodejsSmall,
    DiPython,
    DiDatabase,
    DiMongodb,
    DiGit,
} from "react-icons/di";
import { 
    SiDotnet,
    SiAwsorganizations,
} from "react-icons/si";
import { 
    BiLogoTypescript 
} from "react-icons/bi";
import { 
    FaFlag,
    FaFlagUsa,
    FaRunning,
    FaHandshake 
} from "react-icons/fa";
import { 
    GiBookmarklet,
    GiBackup,
    GiBlackKnightHelm,
} from "react-icons/gi";
import { MdAccessTimeFilled } from "react-icons/md";

const techData = {
    "HTML": { icon: <DiHtml5 />, color: "bg-red-500"},
    "CSS": { icon: <DiCss3 />, color: "bg-blue-500"},
    "Javascript": { icon: <DiJsBadge />, color: "bg-yellow-500"},
    "Typescript": { icon: <BiLogoTypescript />, color: "bg-sky-500"},
    "React": { icon: <DiReact />, color: "bg-blue-700"},
    "Node": { icon: <DiNodejsSmall />, color: "bg-teal-500"},
    "Python": { icon:<DiPython />, color: "bg-amber-600"},
    ".NET": { icon: <SiDotnet />, color: "bg-purple-500"},
    "SQL": { icon: <DiDatabase />, color: "bg-lime-500"},
    "MongoDB": { icon: <DiMongodb />, color: "bg-green-500"},
    "Git": { icon: <DiGit />, color: "bg-slate-950"},
}

const softSkills = {
    "Adaptability": { icon: <FaRunning />, color: "bg-cyan-700" },
    "Self-Learner": { icon: <GiBookmarklet />, color: "bg-emerald-700" },
    "Integrity": { icon: <GiBlackKnightHelm />, color: "bg-red-800" },
    "Organization": { icon: <SiAwsorganizations/>, color: "bg-fuchsia-900" },
    "Team Work": { icon: <GiBackup />, color: "bg-amber-900" },
    "Cooperation": { icon: <FaHandshake />, color: "bg-pink-900" },
    "Time Management": { icon: <MdAccessTimeFilled />, color: "bg-slate-600" },
};

const languages = {
    "English": { icon: < FaFlagUsa />, color: "bg-violet-950"},
    "Spanish": { icon: < FaFlag />, color: "bg-orange-950"},
}

export { techData, softSkills, languages };