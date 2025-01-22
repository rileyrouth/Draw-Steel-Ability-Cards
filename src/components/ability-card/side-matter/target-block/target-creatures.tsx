import { ability_card } from "../../../../types/ability-card-types";
import TargetBox from "./target-box";

export default function TargetCreatures({card, bgColorStyle, numCreatures, type}: {card: ability_card, bgColorStyle: Record<string, string>, numCreatures: string, type: "Creatures" | "Enemies" | "Allies"}){
    const getTargetDescription = (): string => {
        switch(type){
            case "Creatures":
                return `Creature${numCreatures === "1" ? "" : "s"}`
            case "Enemies":
                return `${numCreatures === "1" ? "Enemy" : "Enemies"}`
            case "Allies":
                return `${numCreatures === "1" ? "Ally" : "Allies"}`
            default:
                return ""
        }
    }
    return (
        <TargetBox card={card} bgColorStyle={bgColorStyle}>
            <div className={`absolute inset-0 flex flex-col justify-center items-center w-full h-full pt-[2pt]`}>
                { numCreatures === "All" ? 
                <div
                    className={`text-[18pt] font-body font-bold text-cardback leading-[18pt] small-caps text-center`}>{numCreatures}
                </div>:
                <div
                    className={`${numCreatures === '3' ? `text-[20pt] lining-nums` : `text-[24pt]`} font-body font-bold text-cardback leading-[18pt] small-caps text-center`}>{numCreatures}
                </div>
                }
                { type === "Creatures" &&
                <div
                    className={`text-[7.5pt] font-body font-bold text-cardback leading-none small-caps text-center`}>{getTargetDescription()}
                </div>
                }
                { type === "Enemies" &&
                <div
                    className={`text-[9pt] font-body font-bold text-cardback leading-none small-caps text-center`}>{getTargetDescription()}
                </div>
                }
                { type === "Allies" &&
                <div
                    className={`text-[10.5pt] font-body font-bold text-cardback leading-none small-caps text-center`}>{getTargetDescription()}
                </div>
                }
            </div>
        </TargetBox>
    )
}