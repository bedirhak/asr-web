import { useEffect, useMemo, useState } from "react";
import { Link } from 'react-router-dom';

const items = [
    "Tanıtım Filmi",
    "Sosyal Medya",
    "Drone ve FPV",
    "Reklam",
    "Kurumsal",
];

export default function VerticleText() {
    const [index, setIndex] = useState(0);
    const VISIBLE_COUNT = 3;
    const ITEM_HEIGHT = 48; // px, _verticleText.scss --item-height ile uyumlu

    // Kesintisiz sonsuz döngü için yeterince item kopyalayalım
    const list = useMemo(() => {
        // İki tam döngü + görünür alan için ekstra kopyalar
        return [...items, ...items, ...items];
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => {
                const nextIndex = prev + 1;
                // İkinci döngünün sonuna gelince birinci döngünün başına dön
                if (nextIndex >= items.length * 2) {
                    return items.length; // İkinci döngünün başına dön
                }
                return nextIndex;
            });
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (

        <div className="vertical-text-container">
            <div className="sliding-text-wrapper">
                <div
                    className="sliding-text-track"
                    style={{
                        // En alttan başlayacak şekilde: başlangıçta 2 satır aşağıda başla
                        // Her step'te bir satır yukarı çık, aktif satır en altta görünsün
                        transform: `translateY(calc(${(VISIBLE_COUNT - 1) * ITEM_HEIGHT}px - ${index * ITEM_HEIGHT}px))`,
                        transition: "transform 0.5s ease",
                    }}
                >
                    {list.map((item, i) => (
                        <div className="text-item" key={i}>
                            {item}
                        </div>
                    ))}
                </div>
            </div>
            <div className="fixed-text">Çekimleri</div>
        </div>

    );
}