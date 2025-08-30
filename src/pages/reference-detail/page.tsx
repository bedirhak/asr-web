import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FaArrowLeft, FaPhone, FaWhatsapp, FaCalendar, FaMapMarkerAlt } from 'react-icons/fa';

// Tüm referans resimlerini otomatik olarak içe aktar
const imageContext = import.meta.glob("../../assets/images/asr-refs/*.{png,jpg,jpeg,webp}", { eager: true, as: "url" }) as Record<string, string>;

// Resim URL'sini ref numarasından bul
const getImageUrl = (refNumber: string): string => {
    const imageEntry = Object.entries(imageContext).find(([path, _]) =>
        path.includes(`${refNumber}.`) || path.includes(`${refNumber}-`)
    );
    return imageEntry ? imageEntry[1] : '';
};

interface ReferenceProject {
    id: number;
    title: string;
    description: string;
    category: string;
    completionDate: string;
    location: string;
    catalogUrl?: string; // E-katalog URL'si için opsiyonel alan
    youtubeUrl?: string; // YouTube video URL'si için opsiyonel alan
}

interface ReferenceDetail {
    id: number;
    companyName: string;
    companyLogo: string;
    companyDescription: string;
    summary: string;
    sector: string;
    collaboration: string;
    projects: ReferenceProject[];
    image: string;
    width?: string;

}

const referenceDetails: { [key: string]: ReferenceDetail } = {
    "basak-traktor": {
        id: 1,
        companyName: "BAŞAK TRAKTÖR",
        companyLogo: "ref-2",
        companyDescription: "Tarım makineleri sektöründe faaliyet gösteren köklü bir firma olan Başak Traktör, yenilikçi çözümleriyle tarımsal verimliliği artırmaya odaklanmaktadır.",
        summary: "Başak Traktör ile gerçekleştirdiğimiz kapsamlı işbirliğinde markanın güçlü imajını görsel hikayelerle destekledik. Kurumsal tanıtım filmi ile üretim gücünü, drone çekimleri ile tesis büyüklüğünü, fuar çekimleri ile sektördeki varlığını gösterdik. Profesyonel fotoğraf çalışmaları, detaylı ürün çekimleri ve sosyal medya için özel reels içerikleri ile markanın dijital varlığını güçlendirdik. Stadyum LED animasyonları ile de geniş kitlelere ulaşımını sağladık.",
        sector: "Tarım Makineleri",
        collaboration: "2022 - Devam Ediyor",
        projects: [
            {
                id: 1,
                title: "Kurumsal Tanıtım Filmi",
                description: "Markanın üretim gücünü ve yenilikçi vizyonunu öne çıkaran profesyonel tanıtım filmi",
                category: "Video Prodüksiyon",
                completionDate: "Mart 2022",
                location: "Sakarya"
            },
            {
                id: 2,
                title: "Drone Çekimleri",
                description: "Traktörlerin gücünü ve geniş üretim alanlarını havadan gösteren etkileyici drone görüntüleri",
                category: "Drone Çekimi",
                completionDate: "Nisan 2022",
                location: "Sakarya"
            },
            {
                id: 3,
                title: "Fuar Tanıtım Çekimi",
                description: "Fuar alanında markanın standını, ziyaretçi ilgisini ve etkinlik atmosferini yansıtan video çekimleri",
                category: "Video Prodüksiyon",
                completionDate: "Mayıs 2022",
                location: "İstanbul"
            },
            {
                id: 4,
                title: "Profesyonel Fotoğraf Çekimi",
                description: "Markanın kurumsal imajını güçlendiren yüksek çözünürlüklü fotoğraf çalışmaları",
                category: "Fotoğraf",
                completionDate: "Haziran 2022",
                location: "Sakarya"
            },
            {
                id: 5,
                title: "Ürün Çekimi & Dekupe",
                description: "Traktörleri detaylı şekilde sergileyen, katalog ve dijital kullanıma uygun ürün fotoğrafları",
                category: "Ürün Fotoğrafı",
                completionDate: "Temmuz 2022",
                location: "Sakarya"
            },
            {
                id: 6,
                title: "Sosyal Medya Reels Çekimi",
                description: "Instagram ve diğer sosyal platformlara uygun, kısa ve dikkat çekici reels videoları",
                category: "Sosyal Medya",
                completionDate: "Ağustos 2022",
                location: "Sakarya"
            },
            {
                id: 7,
                title: "LED Reklam Animasyonu",
                description: "Stadyum kenarı LED panolarda yayınlanan, markayı güçlü şekilde tanıtan hareketli reklam tasarımı",
                category: "Animasyon",
                completionDate: "Eylül 2022",
                location: "Online"
            }
        ],
        image: "ref-2"
    },
    "erfo": {
        id: 2,
        companyName: "ERFO",
        companyLogo: "ref-7",
        companyDescription: "Teknoloji sektöründe yenilikçi çözümler sunan ERFO, kurumsal yazılım geliştirme ve dijital dönüşüm projelerinde uzmanlaşmıştır.",
        summary: "ERFO ile fabrika inşaat sürecinin kapsamlı görsel belgelenmesi projesi gerçekleştirdik. Temel atma aşamasından bitişine kadar drone çekimleri ile süreç takibi yaptık. Beton dökme ve kritik yapım aşamalarını sinematik videolarla ölümsüzleştirdik. Sosyal medya için özel reels içerikleri üreterek markanın dijital görünürlüğünü artırdık ve kurumsal kimliği güçlendiren modern kartvizit tasarımı gerçekleştirdik.",
        sector: "Teknoloji",
        width: "180px",
        collaboration: "2021 - 2023",
        projects: [
            {
                id: 1,
                title: "Fabrika Süreç Drone Çekimleri",
                description: "Temel atma aşamasından bitişine kadar fabrikanın inşaat sürecini düzenli aralıklarla belgeleyen drone çekimleri",
                category: "Drone Çekimi",
                completionDate: "Ağustos 2021",
                location: "İstanbul"
            },
            {
                id: 2,
                title: "Beton Dökme ve İnşaat Anları",
                description: "Beton dökme ve kritik yapım aşamalarını profesyonel çekimlerle ölümsüzleştiren sinematik videolar",
                category: "Video Prodüksiyon",
                completionDate: "Ekim 2021",
                location: "İstanbul"
            },
            {
                id: 3,
                title: "Sosyal Medya Reels Videoları",
                description: "Instagram ve diğer sosyal platformlara uygun, markanın dijital görünürlüğünü artıran kısa ve dikkat çekici reels içerikleri",
                category: "Sosyal Medya",
                completionDate: "Kasım 2021",
                location: "Online"
            },
            {
                id: 4,
                title: "Kartvizit Tasarımı",
                description: "Markanın kurumsal kimliğini güçlendiren, modern ve profesyonel kartvizit tasarımı",
                category: "Grafik Tasarım",
                completionDate: "Aralık 2021",
                location: "İstanbul"
            }
        ],
        image: "ref-7"
    },
    "platformder": {
        id: 3,
        companyName: "PLATFORMDER",
        companyLogo: "ref-11",
        companyDescription: "Platform makineleri ve endüstriyel ekipman sektöründe faaliyet gösteren Platformder, fuar organizasyonları ve sektör etkinliklerinde öncü konumda yer almaktadır.",
        summary: "Platformder ile kapsamlı fuar tanıtım ve medya projesi gerçekleştirdik. 3 günlük etkinlik boyunca drone ve kamera çekimleri, röportajlar ile fuar atmosferini kayda aldık. Önceki yılların görüntülerinden tanıtım videoları hazırlayarak etkinlik duyurumunu destekledik. Tüm çekimlerin post prodüksiyon süreçlerini tamamlayarak dijital yayına hazır içerikler ürettik.",
        sector: "Platform Makineleri",
        width: "180px",
        collaboration: "2022",
        projects: [
            {
                id: 1,
                title: "Fuar Öncesi Tanıtım Videoları",
                description: "Önceki yıllara ait görüntülerden hazırlanan, etkinlik duyurusunu destekleyen dikkat çekici videolar",
                category: "Video Prodüksiyon",
                completionDate: "Mayıs 2022",
                location: "Ankara"
            },
            {
                id: 2,
                title: "Fuar Tanıtım Filmi",
                description: "3 gün süren etkinliği özetleyen, platform makinelerinin tanıtımını ve fuar atmosferini yansıtan profesyonel film",
                category: "Video Prodüksiyon",
                completionDate: "Haziran 2022",
                location: "Ankara"
            },
            {
                id: 3,
                title: "Drone Fotoğraf & Video Çekimleri",
                description: "Fuar alanını ve büyük platform makinelerini geniş açıdan gösteren sinematik drone görüntüleri",
                category: "Drone Çekimi",
                completionDate: "Haziran 2022",
                location: "Ankara"
            },
            {
                id: 4,
                title: "Kamera Video & Fotoğraf Çekimleri",
                description: "Etkinlik boyunca stantları, ziyaretçi yoğunluğunu ve makineleri profesyonel kamerayla kayda alan çekimler",
                category: "Video Prodüksiyon",
                completionDate: "Haziran 2022",
                location: "Ankara"
            },
            {
                id: 5,
                title: "Röportaj Çekimleri",
                description: "Katılımcılarla yapılan röportajları profesyonel ses ve görüntü kalitesiyle hazırlayan video çekimleri",
                category: "Röportaj",
                completionDate: "Haziran 2022",
                location: "Ankara"
            },
            {
                id: 6,
                title: "Röportaj Video Düzenleme",
                description: "Çekilen röportajların kurgu ve post prodüksiyon süreciyle fuar sonrası dijital platformlarda yayına hazır hale getirilmesi",
                category: "Video Düzenleme",
                completionDate: "Temmuz 2022",
                location: "Online"
            }
        ],
        image: "ref-11"
    },
    "remax": {
        id: 4,
        companyName: "REMAX İKON",
        companyLogo: "ref-26",
        companyDescription: "Emlak sektöründe güvenilir hizmet veren Remax İkon, müşteri memnuniyetini ön planda tutarak gayrimenkul danışmanlığında uzmanlaşmıştır.",
        summary: "Remax İkon ile gayrimenkul ilanlarının görsel kalitesini artırmaya odaklandık. Profesyonel fotoğraf düzenleme hizmetleri ile emlak portföyünün görsel değerini maksimize ederek, renk ve ışık ayarları yapılmış yüksek kaliteli görsel içerikler ürettik.",
        sector: "Emlak",
        collaboration: "2021 - 2022",
        projects: [
            {
                id: 1,
                title: "Profesyonel Fotoğraf Düzenleme",
                description: "Gayrimenkul ilanlarının görsel değerini artıran, renk ve ışık ayarları yapılmış yüksek kaliteli fotoğraf düzenlemeleri",
                category: "Fotoğraf Düzenleme",
                completionDate: "Aralık 2021",
                location: "İstanbul"
            }
        ],
        image: "ref-26"
    },
    "eze-insaat": {
        id: 5,
        companyName: "EZE İNŞAAT A.Ş.",
        companyLogo: "ref-25",
        companyDescription: "Altyapı ve ulaştırma projelerinde uzmanlaşan EZE İnşaat A.Ş., modern kentsel dönüşüm projelerinde güvenilir iş ortağı konumundadır.",
        summary: "EZE İnşaat A.Ş. ile Kocaeli Tramvay projesi kapsamında kapsamlı görsel belgeleme çalışması gerçekleştirdik. İnşaat başlangıcından açılışına kadar tüm süreci drone çekimleri ile kayda aldık ve etkileyici video montajı ile projeyi görselleştirdik.",
        sector: "İnşaat",
        collaboration: "2025",
        projects: [
            {
                id: 1,
                title: "Tramvay Açılış Drone Çekimleri",
                description: "Kocaeli Tramvay hattının açılış anını havadan belgeleyen profesyonel drone görüntüleri",
                category: "Drone Çekimi",
                completionDate: "Ağustos 2025",
                location: "Kocaeli"
            },
            {
                id: 2,
                title: "Kurulum Süreci Video Montajı",
                description: "İnşaat başlangıcına ait gönderilen drone görüntülerini açılış çekimleriyle birleştirerek süreci özetleyen etkileyici video hazırladık",
                category: "Video Prodüksiyon",
                completionDate: "Ağustos 2025",
                location: "Kocaeli"
            }
        ],
        image: "ref-25"
    },
    "aktepe-ambalaj": {
        id: 6,
        companyName: "AKTEPE AMBALAJ",
        companyLogo: "ref-24",
        companyDescription: "Ambalaj sektöründe kaliteli ürünler sunan Aktepe Ambalaj, Konya ve Antalya'daki geniş depo kapasiteleri ile lojistik çözümlerinde öncü konumda yer almaktadır.",
        summary: "Aktepe Ambalaj ile Konya ve Antalya depolarının kapsamlı tanıtım projesi gerçekleştirdik. Depo kapasitelerini ve lojistik süreçlerini öne çıkaran profesyonel tanıtım filmi hazırladık. Drone çekimleri ile depoların büyüklüğünü etkileyici açılardan gösterdik, kamera çekimleri ile de depo içi operasyonları detaylı şekilde kayda aldık.",
        sector: "Ambalaj & Lojistik",
        collaboration: "2021",
        projects: [
            {
                id: 1,
                title: "Depo Tanıtım Filmi",
                description: "Konya ve Antalya'daki depoların kapasitesini, lojistik süreçlerini ve kurumsal yapısını öne çıkaran profesyonel tanıtım filmi",
                category: "Video Prodüksiyon",
                completionDate: "Ağustos 2021",
                location: "Konya/Antalya"
            },
            {
                id: 2,
                title: "Drone Çekimleri",
                description: "Depoların büyüklüğünü ve çevresini etkileyici açılardan gösteren sinematik havadan çekimler",
                category: "Drone Çekimi",
                completionDate: "Ağustos 2021",
                location: "Konya/Antalya"
            },
            {
                id: 3,
                title: "Kamera Çekimleri",
                description: "Depo içi operasyonları ve detayları profesyonel kamera ile kayda alınan yüksek kaliteli görüntüler",
                category: "Video Prodüksiyon",
                completionDate: "Eylül 2021",
                location: "Konya/Antalya"
            }
        ],
        image: "ref-24"
    },
    "dore-mimi-anaokulu": {
        id: 7,
        companyName: "DORE MİMİ ANAOKULU",
        companyLogo: "ref-22",
        companyDescription: "Çocukların gelişimini destekleyen eğitim yaklaşımıyla Dore Mimi Anaokulu, kaliteli okul öncesi eğitim hizmetleri ve etkinlik organizasyonları sunmaktadır.",
        summary: "Dore Mimi Anaokulu ile 23 Nisan etkinliği kapsamında özel video prodüksiyon projesi gerçekleştirdik. Çocukların çiftler halinde sergilediği dansları özel video formatında kayda aldık. Konser tarzı enerjik performansları müzik eşliğinde profesyonel şekilde çektik. Drone çekimleri ile anaokulunun dış mekanını ve çevresini sinematik açılardan görüntüledik.",
        sector: "Eğitim",
        collaboration: "2022",
        projects: [
            {
                id: 1,
                title: "23 Nisan Dans Videosu",
                description: "Çocukların 23 Nisan etkinliğinde çiftler halinde sergilediği dansları müzik eşliğinde hazırlanan özel video",
                category: "Video Prodüksiyon",
                completionDate: "Nisan 2022",
                location: "İstanbul"
            },
            {
                id: 2,
                title: "Konser Tarzı Dans Videosu",
                description: "Çocukların 23 Nisan etkinliğinde hızlı ritimli müzik eşliğinde enerjik performanslarını yansıtan konser atmosferinde çekilen video",
                category: "Video Prodüksiyon",
                completionDate: "Nisan 2022",
                location: "İstanbul"
            },
            {
                id: 3,
                title: "Drone Çekimleri",
                description: "Anaokulunun dış mekanını ve çevresini havadan gösteren sinematik drone görüntüleri",
                category: "Drone Çekimi",
                completionDate: "Mayıs 2022",
                location: "İstanbul"
            }
        ],
        image: "ref-22"
    },
    "birlik-akademi": {
        id: 8,
        companyName: "BİRLİK AKADEMİ – BİRLİK VAKFI",
        companyLogo: "ref-16",
        companyDescription: "Profesyonel eğitim ve gelişim programları sunan Birlik Akademi ve Birlik Vakfı, bireylerin kariyer hedeflerine ulaşmalarını destekleyen etkinlik ve seminerler düzenlemektedir.",
        summary: "Birlik Akademi - Birlik Vakfı ile kapsamlı etkinlik medya projesi gerçekleştirdik. Yeni dönem tanıtım videosu ile eğitim programlarını duyurduk. 30'dan fazla reels videosu ile sosyal medya görünürlüğünü artırdık. Seminer ve etkinlikleri profesyonel kamera ve drone çekimleri ile kayda aldık. Konum belirleme videosu ile etkinlik alanlarını tanıttık.",
        sector: "Eğitim & Sosyal Sorumluluk",
        collaboration: "2021 - 2022",
        width: "140px",
        projects: [
            {
                id: 1,
                title: "Yeni Dönem Tanıtım Videosu",
                description: "Eğitim, seminer ve etkinliklerin başlangıcını duyuran, profesyonel kurgu ve prodüksiyonla hazırlanan tanıtım videosu",
                category: "Video Prodüksiyon",
                completionDate: "Eylül 2021",
                location: "Ankara"
            },
            {
                id: 2,
                title: "Eğitim & Seminer Reels Videoları",
                description: "30'dan fazla kısa ve etkileyici reels videosu ile seminer ve eğitimlerin sosyal medyada daha görünür olmasını sağladık",
                category: "Sosyal Medya",
                completionDate: "Ekim 2021",
                location: "Ankara"
            },
            {
                id: 3,
                title: "Etkinlik Kamera Çekimleri",
                description: "Seminerler ve etkinliklerde profesyonel kamera ve ekipmanlarla çok yönlü çekimler gerçekleştirdik",
                category: "Video Prodüksiyon",
                completionDate: "Kasım 2021",
                location: "Ankara"
            },
            {
                id: 4,
                title: "Drone Çekimleri",
                description: "Eğitimlerin ve etkinliklerin genel atmosferini ve mekânın genişliğini vurgulayan sinematik drone görüntüleri",
                category: "Drone Çekimi",
                completionDate: "Kasım 2021",
                location: "Ankara"
            },
            {
                id: 5,
                title: "Drone Konum Belirleme Videosu",
                description: "Etkinlik alanını tanıtmak ve yönlendirmeyi kolaylaştırmak için özel olarak hazırlanan drone konum videosu",
                category: "Drone Çekimi",
                completionDate: "Aralık 2021",
                location: "Ankara"
            }
        ],
        image: "ref-16"
    },
    "birlik-vakfi": {
        id: 9,
        companyName: "BİRLİK AKADEMİ – BİRLİK VAKFI",
        companyLogo: "ref-32",
        companyDescription: "Profesyonel eğitim ve gelişim programları sunan Birlik Akademi ve Birlik Vakfı, bireylerin kariyer hedeflerine ulaşmalarını destekleyen etkinlik ve seminerler düzenlemektedir.",
        summary: "Birlik Akademi - Birlik Vakfı ile kapsamlı etkinlik medya projesi gerçekleştirdik. Yeni dönem tanıtım videosu ile eğitim programlarını duyurduk. 30'dan fazla reels videosu ile sosyal medya görünürlüğünü artırdık. Seminer ve etkinlikleri profesyonel kamera ve drone çekimleri ile kayda aldık. Konum belirleme videosu ile etkinlik alanlarını tanıttık.",
        sector: "Eğitim & Sosyal Sorumluluk",
        collaboration: "2021 - 2022",
        projects: [
            {
                id: 1,
                title: "Yeni Dönem Tanıtım Videosu",
                description: "Eğitim, seminer ve etkinliklerin başlangıcını duyuran, profesyonel kurgu ve prodüksiyonla hazırlanan tanıtım videosu",
                category: "Video Prodüksiyon",
                completionDate: "Eylül 2021",
                location: "Ankara"
            },
            {
                id: 2,
                title: "Eğitim & Seminer Reels Videoları",
                description: "30'dan fazla kısa ve etkileyici reels videosu ile seminer ve eğitimlerin sosyal medyada daha görünür olmasını sağladık",
                category: "Sosyal Medya",
                completionDate: "Ekim 2021",
                location: "Ankara"
            },
            {
                id: 3,
                title: "Etkinlik Kamera Çekimleri",
                description: "Seminerler ve etkinliklerde profesyonel kamera ve ekipmanlarla çok yönlü çekimler gerçekleştirdik",
                category: "Video Prodüksiyon",
                completionDate: "Kasım 2021",
                location: "Ankara"
            },
            {
                id: 4,
                title: "Drone Çekimleri",
                description: "Eğitimlerin ve etkinliklerin genel atmosferini ve mekânın genişliğini vurgulayan sinematik drone görüntüleri",
                category: "Drone Çekimi",
                completionDate: "Kasım 2021",
                location: "Ankara"
            },
            {
                id: 5,
                title: "Drone Konum Belirleme Videosu",
                description: "Etkinlik alanını tanıtmak ve yönlendirmeyi kolaylaştırmak için özel olarak hazırlanan drone konum videosu",
                category: "Drone Çekimi",
                completionDate: "Aralık 2021",
                location: "Ankara"
            }
        ],
        image: "ref-32"
    },
    "heya-akademi": {
        id: 10,
        companyName: "HEYA AKADEMİ",
        companyLogo: "ref-17",
        companyDescription: "Yenilikçi eğitim metodolojileri ile öğrencilerin potansiyelini ortaya çıkaran Heya Akademi, roketçilik gibi STEM eğitimleri ile çocuklar ve aileler için workshop programları düzenlemektedir.",
        summary: "Heya Akademi ile roketçilik workshop'larının kapsamlı medya projesi gerçekleştirdik. Çocuklar ve ailelerin katıldığı eğitimleri reels videolarıyla sosyal medyada öne çıkardık. Eğitim anları ve etkileşimleri profesyonel kamera çekimleri ile detaylı kayda aldık. Açık hava atmosferini ve roket denemelerini sinematik drone görüntüleriyle yansıttık.",
        sector: "STEM Eğitimi",
        width: "180px",
        collaboration: "2022 - Devam Ediyor",
        projects: [
            {
                id: 1,
                title: "Workshop Reels Videoları",
                description: "Çocuklar ve ailelerin katıldığı roketçilik eğitimlerini kısa ve etkileyici reels videolarıyla öne çıkardık",
                category: "Sosyal Medya",
                completionDate: "Haziran 2022",
                location: "İstanbul"
            },
            {
                id: 2,
                title: "Kamera Çekimleri",
                description: "Eğitim anlarını ve etkileşimleri profesyonel kamera ile detaylı şekilde kayda aldık",
                category: "Video Prodüksiyon",
                completionDate: "Temmuz 2022",
                location: "İstanbul"
            },
            {
                id: 3,
                title: "Drone Çekimleri",
                description: "Workshopların açık hava atmosferini ve roket denemelerini sinematik drone görüntüleriyle yansıttık",
                category: "Drone Çekimi",
                completionDate: "Ağustos 2022",
                location: "İstanbul"
            }
        ],
        image: "ref-17"
    },
    "vitra": {
        id: 11,
        companyName: "VİTRA",
        companyLogo: "ref-23",
        companyDescription: "Banyo, seramik ve mermer sektöründe dünya markası olan Vitra, yenilikçi tasarımları ve kaliteli ürün çeşitliliğiyle sektörde liderdir.",
        summary: "Vitra ile mermer ürünlerinin görsel tanıtım projesi gerçekleştirdik. Parlak, mat ve desenli mermer çeşitlerini öne çıkaran profesyonel ürün çekimleri yaptık. Mermerlerin detaylarını, doku ve yüzey farklılıklarını vurgulayan estetik tanıtım videosu hazırladık. Ürün çeşitliliğini en iyi şekilde yansıtan görsel içerikler ürettik.",
        sector: "Mermer & Seramik",
        collaboration: "2021",
        projects: [
            {
                id: 1,
                title: "Ürün Tanıtım Çekimleri",
                description: "Parlak, mat ve desenli mermer çeşitlerini öne çıkaran profesyonel ürün çekimleri",
                category: "Ürün Fotoğrafı",
                completionDate: "Nisan 2021",
                location: "İstanbul"
            },
            {
                id: 2,
                title: "Ürün Tanıtım Videosu",
                description: "Mermerlerin detaylarını, doku ve yüzey farklılıklarını vurgulayan estetik ürün tanıtım videosu",
                category: "Video Prodüksiyon",
                completionDate: "Mayıs 2021",
                location: "İstanbul"
            }
        ],
        image: "ref-23"
    },
    "ser-anaokulu": {
        id: 12,
        companyName: "SER ANAOKULU",
        companyLogo: "ref-21",
        companyDescription: "Çocuk gelişimi odaklı eğitim yaklaşımıyla Ser Anaokulu, kaliteli okul öncesi eğitim hizmetleri sunarak aileler için güvenilir bir tercihtir.",
        summary: "Ser Anaokulu ile gerçekleştirdiğimiz 23 Nisan özel etkinliğinde, çocukların eğlenceli anlarını yakaladık. Macera parkında çektiğimiz reels videolardan, professional kamera çekimlerine kadar çeşitli görsel içerikler ürettik.",
        sector: "Eğitim",
        collaboration: "2024",
        projects: [
            {
                id: 1,
                title: "23 Nisan Etkinlik Reels Videosu",
                description: "Macera parkında çocukların eğlenceli anlarını ve model roketçilik atölyesine ailelerle birlikte katılımlarını yansıtan kısa ve dikkat çekici reels videosu",
                category: "Video Prodüksiyon",
                completionDate: "Nisan 2024",
                location: "İstanbul"
            },
            {
                id: 2,
                title: "Kamera Çekimleri",
                description: "23 Nisan etkinliği boyunca çocukların oyun alanlarındaki neşeli anlarını ve atölye çalışmalarını professional kamera ile belgeledik",
                category: "Fotoğraf & Video",
                completionDate: "Nisan 2024",
                location: "İstanbul"
            },
            {
                id: 3,
                title: "Drone Çekimleri",
                description: "Etkinlik alanının genel görünümünü ve çocukların macera parkındaki aktivitelerini havadan çekerek panoramik görüntüler elde ettik",
                category: "Drone Çekimi",
                completionDate: "Nisan 2024",
                location: "İstanbul"
            }
        ],
        image: "ref-21"
    },
    "has-otomotiv": {
        id: 13,
        companyName: "HAS OTOMOTİV - MERCEDES",
        companyLogo: "ref-1",
        companyDescription: "Mercedes-Benz yetkili bayisi Has Otomotiv, lüks otomobil satış ve servis hizmetlerinde sektörün önde gelen firmalarından biridir.",
        summary: "Mercedes-Has Otomotiv ile gerçekleştirilen özel test sürüşü etkinliğinde, lüks araçların sergilendiği bu prestijli günü profesyonel medya prodüksiyonu ile ölümsüzleştirdik.",
        sector: "Otomotiv - Lüks Araçlar",
        collaboration: "2025",
        projects: [
            {
                id: 1,
                title: "Test Sürüşü Etkinlik Videosu",
                description: "Lüks araçların sergilendiği özel test sürüşü gününü profesyonel kurgu ile hazırlanan etkinlik videosuna dönüştürdük",
                category: "Video Prodüksiyon",
                completionDate: "Ağustos 2025",
                location: "İstanbul"
            },
            {
                id: 2,
                title: "Kamera Çekimleri",
                description: "Etkinlikteki araç deneyimlerini ve katılımcıların özel anlarını profesyonel kamera ile detaylı şekilde kayda aldık",
                category: "Fotoğraf & Video",
                completionDate: "Ağustos 2025",
                location: "İstanbul"
            },
            {
                id: 3,
                title: "Drone Çekimleri",
                description: "Test sürüşü alanının büyüklüğünü ve etkinliğin enerjisini sinematik drone görüntüleriyle yansıttık",
                category: "Drone Çekimi",
                completionDate: "Ağustos 2025",
                location: "İstanbul"
            },
            {
                id: 4,
                title: "Fotoğraf Çekimleri",
                description: "Etkinlikten kareleri ölümsüzleştiren, sosyal medya ve basın için kullanılabilir profesyonel fotoğraflar hazırladık",
                category: "Fotoğrafçılık",
                completionDate: "Ağustos 2025",
                location: "İstanbul"
            }
        ],
        image: "ref-1"
    },
    "altinisik-muzik": {
        id: 14,
        companyName: "ALTINIŞIK MÜZİK",
        companyLogo: "ref-27",
        companyDescription: "Müzik eğitimi ve enstrüman satışı alanında faaliyet gösteren Altınışık Müzik, müzik severlerin buluşma noktasıdır.",
        summary: "Altınışık Müzik ile müzik sektörüne özel e-ticaret platformu ve müzik eğitim sistemi geliştirdik. Online müzik dersleri ve enstrüman satış platformu oluşturduk.",
        sector: "Müzik & Eğitim",
        width: "200px",
        collaboration: "2022",
        projects: [
            {
                id: 1,
                title: "E-ticaret Platformu",
                description: "Enstrüman satış ve kiralama sistemi",
                category: "E-ticaret",
                completionDate: "Temmuz 2022",
                location: "İstanbul"
            },
            {
                id: 2,
                title: "Online Ders Sistemi",
                description: "Uzaktan müzik eğitim platformu",
                category: "Web Geliştirme",
                completionDate: "Ağustos 2022",
                location: "Online"
            }
        ],
        image: "ref-27"
    },
    "toki": {
        id: 15,
        companyName: "TOKİ - TOPLU KONUT İDARESİ BAŞKANLIĞI",
        companyLogo: "ref-3",
        companyDescription: "Toplu Konut İdaresi Başkanlığı olarak TOKİ, uygun fiyatlı konut projeleri ve sosyal yaşam alanları ile vatandaşların yaşam kalitesini artırmaktadır.",
        summary: "TOKİ - Toplu Konut İdaresi Başkanlığı ile Millet Bahçesi projelerinde görsel prodüksiyon çalışmaları gerçekleştirdik. Bitlis Millet Bahçesi'nin yeşil alanlarını ve sosyal yaşam alanlarını profesyonel medya içerikleri ile tanıttık.",
        sector: "Kamu",
        width: "150px",
        collaboration: "2025",
        projects: [
            {
                id: 1,
                title: "Drone Çekimleri",
                description: "Millet Bahçesi'nin yeşil alanlarını, yürüyüş yollarını ve park düzenlemelerini havadan gösteren etkileyici görüntüler",
                category: "Drone Çekimi",
                completionDate: "Ağustos 2025",
                location: "Bitlis"
            },
            {
                id: 2,
                title: "Tanıtım Filmi",
                description: "Park ve sosyal yaşam alanlarını öne çıkaran, Bitlis Millet Bahçesi'nin doğaya ve topluma kazandırdığı değeri anlatan tanıtım filmi",
                category: "Video Prodüksiyon",
                completionDate: "Ağustos 2025",
                location: "Bitlis"
            }
        ],
        image: "ref-3"
    },
    "cevre-bakanliği": {
        id: 16,
        companyName: "ÇEVRE VE ŞEHİRCİLİK BAKANLIĞI",
        companyLogo: "ref-28",
        companyDescription: "Çevre korunması, şehir planlaması ve yeşil alan projelerinde öncü olan Çevre ve Şehircilik Bakanlığı, sürdürülebilir kalkınma hedefleri doğrultusunda çalışmaktadır.",
        summary: "Çevre ve Şehircilik Bakanlığı ile Bitlis Millet Bahçesi projesinde kapsamlı görsel çalışmalar gerçekleştirdik. Drone çekimleri ile park alanlarının havadan görüntülerini alarak, tanıtım filmi ile projenin topluma ve doğaya kazandırdığı değeri anlattık. Yeşil alanlar, yürüyüş yolları ve park düzenlemelerini öne çıkaran profesyonel görsel içerikler ürettik.",
        sector: "Kamu",
        collaboration: "2023",
        projects: [
            {
                id: 1,
                title: "Drone Çekimleri",
                description: "Millet Bahçesi'nin yeşil alanlarını, yürüyüş yollarını ve park düzenlemelerini havadan gösteren etkileyici görüntüler",
                category: "Drone Çekimi",
                completionDate: "Haziran 2023",
                location: "Bitlis"
            },
            {
                id: 2,
                title: "Tanıtım Filmi",
                description: "Park ve sosyal yaşam alanlarını öne çıkaran, Bitlis Millet Bahçesi'nin doğaya ve topluma kazandırdığı değeri anlatan tanıtım filmi",
                category: "Video Prodüksiyon",
                completionDate: "Temmuz 2023",
                location: "Bitlis"
            }
        ],
        image: "ref-28"
    },
    "ovemmak": {
        id: 17,
        companyName: "OVEMMAK",
        companyLogo: "ref-5",
        companyDescription: "Endüstriyel makine kurulum ve montaj alanında uzman olan Ovemmak, büyük çaplı projelerle sektörde öncü konumda yer almaktadır.",
        summary: "Ovemmak ile dev makine montajının kapsamlı görsel belgelenmesi projesi gerçekleştirdik. Kurulum sürecinin her aşamasını tanıtım filmi, drone çekimleri ve sinematik kamera çekimleri ile kayda aldık. Profesyonel fotoğraf çalışmaları ile montaj öncesi, süreç ve sonrası görsel arşiv oluşturduk. Makinenin parçalar halinden tamamlanmış haline kadar her adımı detaylı şekilde belgeledik.",
        sector: "Endüstriyel Makine",
        collaboration: "2023",
        projects: [
            {
                id: 1,
                title: "Makine Kurulum Tanıtım Filmi",
                description: "Dev makine montajının tüm aşamalarını baştan sona belgeleyen profesyonel tanıtım filmi",
                category: "Video Prodüksiyon",
                completionDate: "Mart 2023",
                location: "İstanbul",
                youtubeUrl: "https://www.youtube.com/watch?v=Oft3zL17aHQ"
            },
            {
                id: 2,
                title: "Drone Çekimleri",
                description: "Kurulum sürecini geniş açıdan ve etkileyici perspektiflerle aktaran havadan drone çekimleri",
                category: "Drone Çekimi",
                completionDate: "Mart 2023",
                location: "İstanbul"
            },
            {
                id: 3,
                title: "Yer Çekimleri (Kamera)",
                description: "Makine parçalarının montajı ve iş sürecini detaylı şekilde gösteren sinematik kamera çekimleri",
                category: "Video Prodüksiyon",
                completionDate: "Mart 2023",
                location: "İstanbul"
            },
            {
                id: 4,
                title: "Profesyonel Fotoğraf Çekimi",
                description: "Makinenin kurulum öncesi, kurulma aşaması ve tamamlandıktan sonraki halini belgeleyen yüksek kaliteli fotoğraflar",
                category: "Fotoğraf",
                completionDate: "Nisan 2023",
                location: "İstanbul"
            },
            {
                id: 5,
                title: "Kurulum Süreç Belgeleme",
                description: "Makinenin parçalar halinde dışarıda görüntülenmesinden boş alan çekimlerine, kurulum anlarından bitmiş haline kadar her adımı kayda alan görsel arşiv",
                category: "Belgeleme",
                completionDate: "Nisan 2023",
                location: "İstanbul"
            }
        ],
        image: "ref-5"
    },
    "telas": {
        id: 18,
        companyName: "TELAS LASTİK",
        companyLogo: "ref-8",
        companyDescription: "Lastik sektöründe kaliteli ürünler üreten Telas Lastik, geniş ürün gamı ve güvenilir hizmet anlayışıyla sektörde öncü konumda yer almaktadır.",
        summary: "Telas Lastik ile kapsamlı kurumsal tanıtım ve dijital görünürlük projesi gerçekleştirdik. Kurumsal tanıtım filmi ile marka değerini öne çıkardık, web sitesi içerik yönetimi ile dijital varlığını güçlendirdik. Profesyonel ürün fotoğrafları ve dekupe çalışmaları ile görsel kaliteyi artırdık. Baskı ve e-katalog tasarımları ile ürün gamının etkileyici tanıtımını sağladık.",
        sector: "Lastik & Otomotiv",
        collaboration: "2023",
        projects: [
            {
                id: 1,
                title: "Kurumsal Tanıtım Filmi",
                description: "Firmanın üretim gücünü ve marka değerini öne çıkaran profesyonel tanıtım filmi çekimi ve kurgusu",
                category: "Video Prodüksiyon",
                completionDate: "Mart 2023",
                location: "İstanbul"
            },
            {
                id: 2,
                title: "Web Sitesi İçerik Girişi",
                description: "Ürün ve firma bilgilerini düzenli şekilde web sitesine entegre ederek dijital görünürlüğü artıran içerik yönetimi",
                category: "Web İçerik Yönetimi",
                completionDate: "Nisan 2023",
                location: "Online"
            },
            {
                id: 3,
                title: "Ürün Çekimi & Dekupe",
                description: "Lastik ürünlerini detaylı ve net şekilde sergileyen, siteye uygun profesyonel ürün fotoğrafları ve dekupe çalışmaları",
                category: "Ürün Fotoğrafı",
                completionDate: "Mayıs 2023",
                location: "İstanbul"
            },
            {
                id: 4,
                title: "Baskı Katalog Tasarımı",
                description: "Firmanın tüm ürün gamını tanıtan, kurumsal kimliği güçlendiren baskıya hazır katalog tasarımı",
                category: "Grafik Tasarım",
                completionDate: "Haziran 2023",
                location: "İstanbul"
            },
            {
                id: 5,
                title: "E-Katalog Tasarımı",
                description: "Dijital ortamda kolay paylaşılabilir, modern tasarıma sahip interaktif e-katalog çalışması",
                category: "Dijital Katalog",
                completionDate: "Temmuz 2023",
                location: "Online",
                catalogUrl: "https://www.telas.com.tr/ecatalog/telas.html"
            }
        ],
        image: "ref-8"
    },
    "aksiyon-event": {
        id: 19,
        companyName: "AKSİYON EVENT",
        companyLogo: "ref-14",
        companyDescription: "Etkinlik organizasyonu ve dijital pazarlama alanında uzmanlaşan Aksiyon Event, markaların dijital görünürlüğünü artıran yaratıcı çözümler sunar.",
        summary: "Aksiyon Event ile dijital pazarlama ve sosyal medya yönetimi alanında kapsamlı işbirliği gerçekleştirdik. Etkinliklerin dijital ortamda öne çıkmasını sağlayan özgün tasarımlar ve stratejik sosyal medya yönetimi ile markanın dijital varlığını güçlendirdik.",
        sector: "Etkinlik & Dijital Pazarlama",
        collaboration: "2025",
        projects: [
            {
                id: 1,
                title: "Sosyal Medya Tasarımları",
                description: "Etkinliklerin dijital ortamda öne çıkmasını sağlayan özgün ve dikkat çekici sosyal medya görselleri",
                category: "Grafik Tasarım",
                completionDate: "Ağustos 2025",
                location: "İstanbul"
            },
            {
                id: 2,
                title: "Sosyal Medya Yönetimi",
                description: "Markanın dijital görünürlüğünü artırmak için stratejik içerik planlama ve sosyal medya hesaplarının profesyonel yönetimi",
                category: "Dijital Pazarlama",
                completionDate: "Ağustos 2025",
                location: "Online"
            }
        ],
        image: "ref-14"
    },
    "keyes-muhendislik": {
        id: 20,
        companyName: "KEYES MÜHENDİSLİK",
        companyLogo: "ref-10",
        companyDescription: "Mühendislik çözümleri ve teknolojik yenilikler alanında faaliyet gösteren Keyes Mühendislik, sektörel fuarlarda öncü konumunu sergilemektedir.",
        summary: "Keyes Mühendislik ile İstanbul Fuar Merkezi'nde gerçekleşen fuar etkinliği kapsamında kapsamlı görsel prodüksiyon çalışması gerçekleştirdik. Drone çekimleri, profesyonel kamera çekimleri ve kurgu ile fuarın tüm dinamiklerini yakaladık.",
        sector: "Mühendislik & Teknoloji",
        width: "200px",
        collaboration: "2025",
        projects: [
            {
                id: 1,
                title: "Fuar Tanıtım Videosu",
                description: "İstanbul Fuar Merkezi'nde gerçekleşen etkinliği profesyonel kurgu ve prodüksiyonla hazırlanan tanıtım videosuna dönüştürdük",
                category: "Video Prodüksiyon",
                completionDate: "Ağustos 2025",
                location: "İstanbul"
            },
            {
                id: 2,
                title: "Drone Çekimleri",
                description: "Fuar alanının büyüklüğünü ve genel atmosferini sinematik açıdan yansıtan havadan görüntüler",
                category: "Drone Çekimi",
                completionDate: "Ağustos 2025",
                location: "İstanbul"
            },
            {
                id: 3,
                title: "Kamera Çekimleri",
                description: "Stantların, ürünlerin ve ziyaretçi etkileşimlerinin detaylarını profesyonel kamera ile kayda aldık",
                category: "Fotoğraf & Video",
                completionDate: "Ağustos 2025",
                location: "İstanbul"
            }
        ],
        image: "ref-10"
    },
    "sardis": {
        id: 21,
        companyName: "SARDİS",
        companyLogo: "ref-31",
        companyDescription: "Spor ve yaşam tarzı ürünleri alanında faaliyet gösteren Sardis, kaliteli sponsorluk projeleri ile marka bilinirliğini artırmaktadır.",
        summary: "Sardis ile Milli Boksör Dilara Yücel'in sponsorluk projesi kapsamında sosyal medya içerik üretimi gerçekleştirdik. Sporcu ile markanın buluşmasını anlatan etkileyici reels videosu ile dijital platformlarda güçlü bir etki yaratıldı.",
        sector: "Spor & Yaşam Tarzı",
        collaboration: "2025",
        projects: [
            {
                id: 1,
                title: "Sosyal Medya Reels Videosu",
                description: "Milli Boksör Dilara Yücel'in sponsorluk kapsamında marka ile buluşmasını anlatan, sosyal medya için özel olarak hazırlanan reels videosu",
                category: "Video Prodüksiyon",
                completionDate: "Ağustos 2025",
                location: "İstanbul"
            }
        ],
        image: "ref-31"
    },
    "starkgen": {
        id: 22,
        companyName: "STARKGEN",
        companyLogo: "ref-9",
        companyDescription: "Jeneratör teknolojileri alanında kaliteli ürünler üreten Starkgen, güç çözümleri sektöründe güvenilir ve yenilikçi yaklaşımıyla öne çıkmaktadır.",
        summary: "Starkgen ile jeneratör ürünlerinin kapsamlı tanıtım projesi gerçekleştirdik. Üç farklı jeneratör modelini stüdyo ortamında profesyonel fotoğraf ve video çekimleri ile belgeledik. Drone çekimleri ve ayrı tanıtım videoları ile ürünlerin teknik üstünlüğünü etkili şekilde yansıttık.",
        sector: "Enerji & Teknoloji",
        collaboration: "2025",
        projects: [
            {
                id: 1,
                title: "Ürün Tanıtım Fotoğraf Çekimleri",
                description: "Üç farklı jeneratör modelini stüdyo ortamında detaylı ve profesyonel şekilde fotoğrafladık",
                category: "Ürün Fotoğrafı",
                completionDate: "Ağustos 2025",
                location: "İstanbul"
            },
            {
                id: 2,
                title: "Ürün Tanıtım Video Çekimleri",
                description: "Jeneratörlerin teknik özelliklerini ve kullanım avantajlarını öne çıkaran, stüdyo ortamında profesyonel video çekimleri yaptık",
                category: "Video Prodüksiyon",
                completionDate: "Ağustos 2025",
                location: "İstanbul"
            },
            {
                id: 3,
                title: "Ürün Tanıtım Videoları",
                description: "Her bir jeneratör için ayrı ayrı hazırlanan üç tanıtım videosu ile ürünlerin gücünü etkili şekilde yansıttık",
                category: "Video Prodüksiyon",
                completionDate: "Ağustos 2025",
                location: "İstanbul"
            },
            {
                id: 4,
                title: "Drone Çekimleri",
                description: "Ürünlerin farklı açılardan güçlü ve estetik görsellerini sunan sinematik drone görüntüleri",
                category: "Drone Çekimi",
                completionDate: "Ağustos 2025",
                location: "İstanbul"
            }
        ],
        image: "ref-9"
    },
    "sakarya-genclik-merkezi": {
        id: 23,
        companyName: "SAKARYA GENÇLİK MERKEZİ",
        companyLogo: "ref-15",
        companyDescription: "Sakarya'da gençlere yönelik sosyal, kültürel ve eğitsel etkinlikler düzenleyen Sakarya Gençlik Merkezi, gençlerin gelişimine katkı sağlayan önemli bir kurumdur.",
        summary: "Sakarya Gençlik Merkezi ile gençlik etkinliklerinin görsel belgelenmesi projesi gerçekleştirdik. Profesyonel video çekimleri ve sosyal medya içerikleri ile gençlerin aktif katılımını ve etkinliklerin enerjisini dijital platformlarda etkili şekilde yansıttık.",
        sector: "Kamu & Gençlik",
        width: "220px",
        collaboration: "2025",
        projects: [
            {
                id: 1,
                title: "Etkinlik Video Çekimleri",
                description: "Gençlik merkezinin düzenlediği etkinlikleri profesyonel kamera ve ekipmanlarla kayda aldık",
                category: "Video Prodüksiyon",
                completionDate: "Ağustos 2025",
                location: "Sakarya"
            },
            {
                id: 2,
                title: "Sosyal Medya Videoları",
                description: "Etkinliklerin enerjisini ve gençlerin katılımını yansıtan, sosyal medya için özel olarak hazırlanan kısa videolar",
                category: "Sosyal Medya İçeriği",
                completionDate: "Ağustos 2025",
                location: "Sakarya"
            }
        ],
        image: "ref-15"
    },
    "usul-okullari": {
        id: 24,
        companyName: "USUL OKULLARI",
        companyLogo: "ref-18",
        companyDescription: "Kaliteli eğitim anlayışıyla öne çıkan Usul Okulları, öğrencilerin akademik ve kişisel gelişimlerine odaklanan yenilikçi eğitim yaklaşımları ile tanınmaktadır.",
        summary: "Usul Okulları ile dijital pazarlama ve sosyal medya yönetimi alanında kapsamlı işbirliği gerçekleştirdik. Okulun eğitim vizyonunu yansıtan özgün tasarımlar ve stratejik sosyal medya yönetimi ile kurumun dijital varlığını güçlendirdik.",
        sector: "Eğitim",
        collaboration: "2025",
        projects: [
            {
                id: 1,
                title: "Sosyal Medya Tasarımları",
                description: "Okulun eğitim vizyonunu yansıtan, özgün ve dikkat çekici sosyal medya görsel tasarımları",
                category: "Grafik Tasarım",
                completionDate: "Ağustos 2025",
                location: "İstanbul"
            },
            {
                id: 2,
                title: "Sosyal Medya Yönetimi",
                description: "Markanın dijital görünürlüğünü artırmak için stratejik içerik planlaması ve sosyal medya hesaplarının profesyonel yönetimi",
                category: "Dijital Pazarlama",
                completionDate: "Ağustos 2025",
                location: "Online"
            }
        ],
        image: "ref-18"
    },
    "itina-egitim-kurumlari": {
        id: 25,
        companyName: "İTİNA EĞİTİM KURUMLARI",
        companyLogo: "ref-19",
        companyDescription: "Eğitimde öncü yaklaşımları ile tanınan İtina Eğitim Kurumları, öğrencilerin akademik başarılarını ve kişisel gelişimlerini destekleyen kaliteli eğitim hizmetleri sunmaktadır.",
        summary: "İtina Eğitim Kurumları ile dijital pazarlama ve sosyal medya yönetimi alanında stratejik işbirliği gerçekleştirdik. Kurumun eğitim vizyonunu yansıtan özgün tasarımlar ve profesyonel sosyal medya yönetimi ile dijital bilinirliği artırdık.",
        sector: "Eğitim",
        collaboration: "2025",
        projects: [
            {
                id: 1,
                title: "Sosyal Medya Tasarımları",
                description: "Kurumun eğitim vizyonunu yansıtan, özgün ve dikkat çekici sosyal medya görselleri tasarladık",
                category: "Grafik Tasarım",
                completionDate: "Ağustos 2025",
                location: "İstanbul"
            },
            {
                id: 2,
                title: "Sosyal Medya Yönetimi",
                description: "Eğitim kurumunun dijital bilinirliğini artırmak için stratejik içerik planlaması ve profesyonel sosyal medya yönetimi gerçekleştirdik",
                category: "Dijital Pazarlama",
                completionDate: "Ağustos 2025",
                location: "Online"
            }
        ],
        image: "ref-19"
    },
    "birey-okullari": {
        id: 26,
        companyName: "BİREY OKULLARI",
        companyLogo: "ref-20",
        companyDescription: "Bireysel gelişime odaklanan Birey Okulları, öğrencilerin potansiyellerini keşfetmelerine yardımcı olan modern eğitim yaklaşımları ile öne çıkan köklü bir eğitim kurumudur.",
        summary: "Birey Okulları ile kapsamlı dijital pazarlama projesi gerçekleştirdik. Kurumsal kimliği yansıtan sosyal medya tasarımları, stratejik sosyal medya yönetimi ve var olan materyallerle hazırlanan profesyonel videolar ile okulun dijital varlığını güçlendirdik.",
        sector: "Eğitim",
        collaboration: "2025",
        projects: [
            {
                id: 1,
                title: "Sosyal Medya Tasarımları",
                description: "Okulun kurumsal kimliğini yansıtan, dikkat çekici ve özgün sosyal medya görselleri hazırladık",
                category: "Grafik Tasarım",
                completionDate: "Ağustos 2025",
                location: "İstanbul"
            },
            {
                id: 2,
                title: "Sosyal Medya Yönetimi",
                description: "Eğitim kurumunun dijital görünürlüğünü artırmak için stratejik içerik planlaması ve sosyal medya hesap yönetimi yaptık",
                category: "Dijital Pazarlama",
                completionDate: "Ağustos 2025",
                location: "Online"
            },
            {
                id: 3,
                title: "Sosyal Medya Videoları",
                description: "Çekim yapılmadan, sağlanan görsel ve materyallerle hazırlanmış profesyonel sosyal medya videoları oluşturduk",
                category: "Video Prodüksiyon",
                completionDate: "Ağustos 2025",
                location: "Online"
            }
        ],
        image: "ref-20"
    },
    "asko-holding": {
        id: 27,
        companyName: "ASKO HOLDİNG",
        companyLogo: "ref-4",
        companyDescription: "Tarım makineleri ve traktör üretiminde Türkiye'nin önde gelen firmalarından biri olan Asko Holding, yenilikçi teknolojileri ve güçlü üretim kapasitesi ile sektörde lider konumundadır.",
        summary: "Asko Holding ile kapsamlı kurumsal medya prodüksiyon projesi gerçekleştirdik. Tanıtım filminden drone çekimlerine, fuar videolarından LED reklam animasyonuna kadar geniş yelpazede görsel içerikler üreterek markanın güçlü imajını destekledik.",
        sector: "Tarım Makineleri & Otomotiv",
        collaboration: "2025",
        projects: [
            {
                id: 1,
                title: "Kurumsal Tanıtım Filmi",
                description: "Markanın üretim gücünü ve yenilikçi vizyonunu öne çıkaran profesyonel tanıtım filmi",
                category: "Video Prodüksiyon",
                completionDate: "Ağustos 2025",
                location: "İstanbul"
            },
            {
                id: 2,
                title: "Drone Çekimleri",
                description: "Traktörlerin gücünü ve geniş üretim alanlarını havadan gösteren etkileyici drone görüntüleri",
                category: "Drone Çekimi",
                completionDate: "Ağustos 2025",
                location: "İstanbul"
            },
            {
                id: 3,
                title: "Fuar Tanıtım Çekimi",
                description: "Fuar alanında markanın standını, ziyaretçi ilgisini ve etkinlik atmosferini yansıtan video çekimleri",
                category: "Video Prodüksiyon",
                completionDate: "Ağustos 2025",
                location: "İstanbul"
            },
            {
                id: 4,
                title: "Profesyonel Fotoğraf Çekimi",
                description: "Markanın kurumsal imajını güçlendiren yüksek çözünürlüklü fotoğraf çalışmaları",
                category: "Fotoğrafçılık",
                completionDate: "Ağustos 2025",
                location: "İstanbul"
            },
            {
                id: 5,
                title: "Ürün Çekimi & Dekupe",
                description: "Traktörleri detaylı şekilde sergileyen, katalog ve dijital kullanıma uygun ürün fotoğrafları",
                category: "Ürün Fotoğrafı",
                completionDate: "Ağustos 2025",
                location: "İstanbul"
            },
            {
                id: 6,
                title: "Sosyal Medya Reels Çekimi",
                description: "Instagram ve diğer sosyal platformlara uygun, kısa ve dikkat çekici reels videoları",
                category: "Sosyal Medya İçeriği",
                completionDate: "Ağustos 2025",
                location: "İstanbul"
            },
            {
                id: 7,
                title: "LED Reklam Animasyonu",
                description: "Stadyum kenarı LED panolarda yayınlanan, markayı güçlü şekilde tanıtan hareketli reklam tasarımı",
                category: "Animasyon & Motion Graphics",
                completionDate: "Ağustos 2025",
                location: "Online"
            }
        ],
        image: "ref-4"
    },
    "ersag": {
        id: 28,
        companyName: "ERSAĞ",
        companyLogo: "ref-12",
        companyDescription: "Sağlık ve beslenme alanında faaliyet gösteren Ersağ, büyük organizasyonlar ve liderlik seminerleri ile sektörde öncü konumunu sürdürmektedir.",
        summary: "Ersağ ile kapsamlı etkinlik belgeleme ve dijital pazarlama projesi gerçekleştirdik. 5.000 kişilik büyük organizasyonların görsel belgelenmesinden Instagram hesap yönetimine, logo tasarımından belgesel çekimine kadar geniş kapsamlı hizmetler sunduk.",
        sector: "Sağlık & Beslenme",
        collaboration: "2025",
        projects: [
            {
                id: 1,
                title: "Seminer Etkinlik Çekimleri",
                description: "5.000 kişinin katıldığı büyük organizasyonlarda sahneye çıkan liderlerin anlarını profesyonel kamera ile kayda aldık",
                category: "Video Prodüksiyon",
                completionDate: "Ağustos 2025",
                location: "Kocaeli"
            },
            {
                id: 2,
                title: "Drone & Kamera Reels Çekimi",
                description: "Kocaeli'deki seminerin enerjisini havadan ve yerden görüntüleyerek sosyal medya için özel reels videoları hazırladık",
                category: "Sosyal Medya İçeriği",
                completionDate: "Ağustos 2025",
                location: "Kocaeli"
            },
            {
                id: 3,
                title: "Instagram Hesap Yönetimi",
                description: "Genç Liderler Instagram hesabını stratejik içerik planlaması ve profesyonel yönetimle büyüttük",
                category: "Dijital Pazarlama",
                completionDate: "Ağustos 2025",
                location: "Online"
            },
            {
                id: 4,
                title: "Logo Tasarımı",
                description: "Genç Liderler için modern ve kurumsal kimliği yansıtan özgün logo tasarımı gerçekleştirdik",
                category: "Grafik Tasarım",
                completionDate: "Ağustos 2025",
                location: "İstanbul"
            },
            {
                id: 5,
                title: "Belgesel Çekimi",
                description: "Ersağ müdürlerinden biri için drone, kamera ve diğer tüm ekipmanlarla etkileyici bir belgesel çekimi yaptık",
                category: "Belgesel Prodüksiyon",
                completionDate: "Ağustos 2025",
                location: "İstanbul"
            }
        ],
        image: "ref-12"
    },
    "aslan-kirdar-spor": {
        id: 29,
        companyName: "ASLAN KIRDAR SPOR ORGANİZASYONU A.Ş.",
        companyLogo: "ref-13",
        companyDescription: "Spor organizasyonları ve yaz okulu programları ile çocukların spor yapmayı sevmelerini sağlayan Aslan Kırdar Spor Organizasyonu, 20 farklı spor dalında kaliteli hizmet sunmaktadır.",
        summary: "Aslan Kırdar Spor Organizasyonu A.Ş. ile yaz okulu programlarının kapsamlı görsel belgeleme projesi gerçekleştirdik. 20 farklı spor dalını kapsayan etkinliklerin tanıtım filmi, sosyal medya içerikleri ve röportaj videoları ile organizasyonun dinamik atmosferini yansıttık.",
        sector: "Spor & Organizasyon",
        collaboration: "2025",
        projects: [
            {
                id: 1,
                title: "Tanıtım Filmi Çekimi",
                description: "20 farklı spor dalını kapsayan yaz okulunun atmosferini yansıtan profesyonel yatay formatta tanıtım filmi hazırladık",
                category: "Video Prodüksiyon",
                completionDate: "Ağustos 2025",
                location: "İstanbul"
            },
            {
                id: 2,
                title: "Sosyal Medya Reels Videosu",
                description: "Spor etkinliklerinin enerjisini ve çocukların dinamizmini öne çıkaran dikey formatta kısa reels videosu oluşturduk",
                category: "Sosyal Medya İçeriği",
                completionDate: "Ağustos 2025",
                location: "İstanbul"
            },
            {
                id: 3,
                title: "Röportaj Videosu",
                description: "Çocuklar ve velilerle yapılan röportajları kamera ve profesyonel ses ekipmanlarıyla kaydederek ayrı bir video haline getirdik",
                category: "Video Prodüksiyon",
                completionDate: "Ağustos 2025",
                location: "İstanbul"
            },
            {
                id: 4,
                title: "Drone Çekimleri",
                description: "Spor alanlarını ve etkinlikleri geniş perspektiften gösteren sinematik drone görüntüleri",
                category: "Drone Çekimi",
                completionDate: "Ağustos 2025",
                location: "İstanbul"
            },
            {
                id: 5,
                title: "Fotoğraf Çekimleri",
                description: "Sosyal medyada paylaşım için çocukların ve etkinliklerin öne çıkan anlarını profesyonel fotoğraflarla belgeledik",
                category: "Fotoğrafçılık",
                completionDate: "Ağustos 2025",
                location: "İstanbul"
            }
        ],
        image: "ref-13"
    },
    "yutek-gemi-insa": {
        id: 30,
        companyName: "YUTEK GEMİ İNŞA",
        companyLogo: "ref-6",
        companyDescription: "Denizcilik sektöründe faaliyet gösteren Yutek Gemi İnşa, kaliteli gemi yapım ve onarım hizmetleriyle sektörde güvenilir bir konumda yer almaktadır.",
        summary: "Yutek Gemi İnşa ile denizcilik sektörüne özel görsel içerikler ürettik. Tersane çalışmaları ve gemi inşa süreçlerini profesyonel çekimlerle belgeledik.",
        sector: "Denizcilik & İnşaat",
        collaboration: "2025",
        projects: [
            {
                id: 1,
                title: "Tersane Çekimleri",
                description: "Gemi inşa süreçlerini ve tersane çalışmalarını profesyonel kamera ile kayda aldık",
                category: "Video Prodüksiyon",
                completionDate: "Ağustos 2025",
                location: "İstanbul"
            }
        ],
        image: "ref-6"
    },
    "akcansa": {
        id: 31,
        companyName: "AKÇANSA",
        companyLogo: "ref-29",
        companyDescription: "İnşaat malzemeleri sektöründe faaliyet gösteren Akçansa, çimento ve yapı malzemeleri üretiminde Türkiye'nin önde gelen firmalarından biridir.",
        summary: "Akçansa ile dev makine kurulum projesinin kapsamlı görsel belgelemesini gerçekleştirdik. Makine montajının tüm aşamalarını baştan sona profesyonel çekimlerle kayda aldık. Drone, kamera ve fotoğraf çekimleri ile kurulum sürecini detaylı şekilde arşivledik.",
        sector: "İnşaat Malzemeleri",
        collaboration: "2025",
        projects: [
            {
                id: 1,
                title: "Makine Kurulum Tanıtım Filmi",
                description: "Dev makine montajının tüm aşamalarını baştan sona belgeleyen profesyonel tanıtım filmi",
                category: "Video Prodüksiyon",
                completionDate: "Ağustos 2025",
                location: "İstanbul"
            },
            {
                id: 2,
                title: "Drone Çekimleri",
                description: "Kurulum sürecini geniş açıdan ve etkileyici perspektiflerle aktaran havadan drone çekimleri",
                category: "Drone Çekimi",
                completionDate: "Ağustos 2025",
                location: "İstanbul"
            },
            {
                id: 3,
                title: "Yer Çekimleri (Kamera)",
                description: "Makine parçalarının montajı ve iş sürecini detaylı şekilde gösteren sinematik kamera çekimleri",
                category: "Video Prodüksiyon",
                completionDate: "Ağustos 2025",
                location: "İstanbul"
            },
            {
                id: 4,
                title: "Profesyonel Fotoğraf Çekimi",
                description: "Makinenin kurulum öncesi, kurulma aşaması ve tamamlandıktan sonraki halini belgeleyen yüksek kaliteli fotoğraflar",
                category: "Fotoğrafçılık",
                completionDate: "Ağustos 2025",
                location: "İstanbul"
            },
            {
                id: 5,
                title: "Kurulum Süreç Belgeleme",
                description: "Makinenin parçalar halinde dışarıda görüntülenmesinden boş alan çekimlerine, kurulum anlarından bitmiş haline kadar her adımı kayda alan görsel arşiv",
                category: "Süreç Belgeleme",
                completionDate: "Ağustos 2025",
                location: "İstanbul"
            }
        ],
        image: "ref-29"
    },
    "la-vivella": {
        id: 32,
        companyName: "LA VIVELLA BEAUTY",
        companyLogo: "ref-30",
        companyDescription: "Anatolium Marmara AVM'de bulunan La Vivella Beauty, kaliteli güzellik hizmetleri ve modern kozmetik uygulamalarıyla müşteri memnuniyetini ön planda tutan prestijli bir güzellik merkezidir.",
        summary: "La Vivella Beauty ile Anatolium Marmara AVM'deki güzellik merkezinin kapsamlı görsel prodüksiyon projesi gerçekleştirdik. Tanıtım filmi, reels videoları ve drone çekimleri ile merkezin hizmetlerini ve modern atmosferini etkileyici şekilde yansıttık.",
        sector: "Güzellik & Kozmetik",
        collaboration: "2025",
        projects: [
            {
                id: 1,
                title: "Tanıtım Filmi Çekimi",
                description: "Anatolium Marmara AVM'de bulunan güzellik merkezinin hizmetlerini öne çıkaran profesyonel tanıtım filmi hazırladık",
                category: "Video Prodüksiyon",
                completionDate: "Ağustos 2025",
                location: "İstanbul"
            },
            {
                id: 2,
                title: "Reels Tanıtım Videosu",
                description: "Kamera ve diğer tüm ekipmanlarla çekim yaparak sosyal medya için dikkat çekici dikey formatta reels videosu ürettik",
                category: "Sosyal Medya İçeriği",
                completionDate: "Ağustos 2025",
                location: "İstanbul"
            },
            {
                id: 3,
                title: "Drone Çekimleri",
                description: "Güzellik merkezinin dış mekanını ve çevresini havadan gösteren sinematik drone görüntüleri",
                category: "Drone Çekimi",
                completionDate: "Ağustos 2025",
                location: "İstanbul"
            }
        ],
        image: "ref-30"
    },
    "yafa": {
        id: 33,
        companyName: "YAFA İNŞAAT",
        companyLogo: "ref-33",
        companyDescription: "İnşaat sektöründe faaliyet gösteren Yafa İnşaat, köprü inşaatları ve altyapı projelerinde uzmanlaşmış deneyimli bir firmadır.",
        summary: "Yafa İnşaat ile köprü inşaatı projesinin kapsamlı görsel belgeleme çalışması gerçekleştirdik. İnşaat sürecinin farklı aşamalarını drone çekimleri ile profesyonelce kayda aldık ve müşteri ihtiyaçlarına uygun ham görsel teslimatı sağladık.",
        sector: "İnşaat & Altyapı",
        collaboration: "2025",
        projects: [
            {
                id: 1,
                title: "Köprü İnşaatı Drone Çekimleri",
                description: "Köprü inşaatının farklı aşamalarını aralıklı olarak kayda alan profesyonel drone video çekimleri",
                category: "Drone Çekimi",
                completionDate: "Ağustos 2025",
                location: "İstanbul"
            },
            {
                id: 2,
                title: "Drone Fotoğraf Çekimleri",
                description: "İnşaat sürecini belgeleyen, yüksek çözünürlüklü havadan fotoğraf çekimleri",
                category: "Drone Fotoğrafı",
                completionDate: "Ağustos 2025",
                location: "İstanbul"
            },
            {
                id: 3,
                title: "Ham Görsel Teslimi",
                description: "Müşterinin ihtiyaçlarına uygun şekilde, düzenlenmemiş ham fotoğraf ve video teslimi",
                category: "Görsel Arşivleme",
                completionDate: "Ağustos 2025",
                location: "Online"
            }
        ],
        image: "ref-33"
    }
};

// YouTube URL'sini embed URL'sine çevir
const getYouTubeEmbedUrl = (url: string): string => {
    const videoId = url.split('watch?v=')[1]?.split('&')[0];
    return videoId ? `https://www.youtube.com/embed/${videoId}` : '';
};

// YouTube video ID'sini al
const getYouTubeVideoId = (url: string): string => {
    return url.split('watch?v=')[1]?.split('&')[0] || '';
};

// YouTube thumbnail URL'sini al
const getYouTubeThumbnail = (url: string): string => {
    const videoId = getYouTubeVideoId(url);
    return videoId ? `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg` : '';
};

// URL slug'ını referans anahtarına çevir
const getRefKey = (slug: string): string => {
    return slug.toLowerCase().replace(/-/g, '-');
};

const ReferenceDetailPage: React.FC = () => {
    const { slug } = useParams<{ slug: string }>();
    const navigate = useNavigate();

    // YouTube popup state
    const [isVideoModalOpen, setIsVideoModalOpen] = React.useState(false);
    const [currentVideoUrl, setCurrentVideoUrl] = React.useState('');
    const [currentVideoTitle, setCurrentVideoTitle] = React.useState('');

    const refKey = slug ? getRefKey(slug) : '';
    const reference = referenceDetails[refKey];

    // Video popup fonksiyonları
    const openVideoModal = (url: string, title: string) => {
        setCurrentVideoUrl(url);
        setCurrentVideoTitle(title);
        setIsVideoModalOpen(true);
        document.body.style.overflow = 'hidden'; // Body scroll'u kapat
    };

    const closeVideoModal = () => {
        setIsVideoModalOpen(false);
        setCurrentVideoUrl('');
        setCurrentVideoTitle('');
        document.body.style.overflow = 'unset'; // Body scroll'u aç
    };

    // ESC tuşu ile popup'ı kapatma
    React.useEffect(() => {
        const handleEsc = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                closeVideoModal();
            }
        };
        if (isVideoModalOpen) {
            document.addEventListener('keydown', handleEsc);
        }
        return () => {
            document.removeEventListener('keydown', handleEsc);
            document.body.style.overflow = 'unset'; // Cleanup
        };
    }, [isVideoModalOpen]);

    // Referans bulunamazsa ana sayfaya yönlendir
    if (!reference) {
        return (
            <div className="reference-not-found">
                <div className="container">
                    <h2>Referans bulunamadı</h2>
                    <button onClick={() => navigate('/references')} className="btn-primary">
                        Referanslara Dön
                    </button>
                </div>
            </div>
        );
    }

    const handleCall = () => {
        window.open('tel:+905434160222', '_self');
    };

    const handleWhatsApp = () => {
        const message = `Merhaba, ${reference.companyName} referansı hakkında bilgi almak istiyorum.`;
        const whatsappUrl = `https://wa.me/905434160222?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
    };

    return (
        <div className="reference-detail-page">
            {/* Hero Section */}
            <div className="reference-hero">
                <div className="reference-hero-container">
                    <button
                        className="back-button"
                        onClick={() => navigate('/references')}
                    >
                        <FaArrowLeft /> Referanslara Dön
                    </button>

                    <div className="reference-hero-content">
                        <div className="reference-hero-text">
                            <h1 className="reference-hero-title">
                                {reference.companyName}
                            </h1>
                            <p className="reference-hero-subtitle">
                                {reference.sector} • {reference.collaboration}
                            </p>
                            <p className="reference-hero-description">
                                {reference.companyDescription}
                            </p>

                            <div className="hero-buttons">
                                <button className="btn-primary" onClick={handleCall}>
                                    <FaPhone /> Hemen Ara
                                </button>
                                <button className="btn-secondary" onClick={handleWhatsApp}>
                                    <FaWhatsapp /> WhatsApp
                                </button>
                            </div>
                        </div>

                        <div className="reference-hero-image reference-detail-page-image" >
                            <img
                                style={{ width: reference.width }}
                                src={getImageUrl(reference.image)}
                                alt={reference.companyName}
                                className="reference-main-image"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Summary Section */}
            <div className="reference-summary">
                <div className="reference-summary-container">
                    <div className="summary-content">
                        <h2>İşbirliği Özeti</h2>
                        <p>{reference.summary}</p>
                    </div>
                </div>
            </div>

            {/* Projects Section */}
            <div className="reference-projects">
                <div className="reference-projects-container">
                    <h2>Yapılan İşler</h2>
                    <div className="projects-grid">
                        {reference.projects.map((project) => (
                            <div key={project.id} className="project-card">
                                <div className="project-header">
                                    <h3>{project.title}</h3>
                                    <span className="project-category">{project.category}</span>
                                </div>
                                <p className="project-description">{project.description}</p>

                                {project.youtubeUrl && (
                                    <div className="project-youtube">
                                        <div
                                            className="youtube-thumbnail-container"
                                            onClick={() => openVideoModal(project.youtubeUrl!, project.title)}
                                        >
                                            <img
                                                src={getYouTubeThumbnail(project.youtubeUrl)}
                                                alt={project.title}
                                                className="youtube-thumbnail-image"
                                            />

                                        </div>
                                    </div>
                                )}

                                {project.catalogUrl && (
                                    <div className="project-catalog">
                                        <a
                                            href={project.catalogUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="catalog-link"
                                        >
                                            📖 E-Katalogu İncele
                                        </a>
                                    </div>
                                )}

                                <div className="project-meta">
                                    {/* <div className="project-date">
                                        <FaCalendar />
                                        <span>{project.completionDate}</span>
                                    </div> */}
                                    {/* <div className="project-location">
                                        <FaMapMarkerAlt />
                                        <span>{project.location}</span>
                                    </div> */}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* CTA Section */}
            <div className="reference-cta">
                <div className="reference-cta-container">
                    <h2>Sizin de Projeniz İçin Birlikte Çalışalım</h2>
                    <p>Benzer başarılı projeler gerçekleştirmek için hemen iletişime geçin.</p>
                    <div className="cta-buttons">
                        <button className="btn-primary" onClick={handleCall}>
                            <FaPhone /> Hemen Ara
                        </button>
                        <button className="btn-secondary" onClick={handleWhatsApp}>
                            <FaWhatsapp /> WhatsApp ile İletişim
                        </button>
                    </div>
                </div>
            </div>

            {/* Video Modal Popup */}
            {isVideoModalOpen && (
                <div
                    className="video-modal-overlay"
                    onClick={closeVideoModal}
                    style={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        backgroundColor: 'rgba(0, 0, 0, 0.9)',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        zIndex: 9999,
                        padding: '20px'
                    }}
                >
                    <div
                        className="video-modal-content"
                        onClick={(e) => e.stopPropagation()}
                        style={{
                            position: 'relative',
                            width: '95vw',
                            maxWidth: '1200px',
                            height: 'auto',
                            backgroundColor: '#000',
                            borderRadius: '12px',
                            overflow: 'hidden',
                            boxShadow: '0 25px 50px rgba(0, 0, 0, 0.8)'
                        }}
                    >
                        <button
                            className="video-modal-close"
                            onClick={closeVideoModal}
                            aria-label="Videoyu Kapat"
                            style={{
                                position: 'absolute',
                                top: '15px',
                                right: '15px',
                                width: '40px',
                                height: '40px',
                                backgroundColor: 'rgba(0, 0, 0, 0.7)',
                                border: 'none',
                                borderRadius: '50%',
                                color: 'white',
                                cursor: 'pointer',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                zIndex: 10001,
                                transition: 'background-color 0.3s ease'
                            }}
                        >
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                                <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>

                        <div className="video-modal-header" style={{ padding: '20px 20px 10px' }}>
                            <h3 className="video-modal-title" style={{
                                color: 'white',
                                margin: 0,
                                fontSize: '1.5rem',
                                fontWeight: '600'
                            }}>
                                {currentVideoTitle}
                            </h3>
                        </div>

                        <div
                            className="video-modal-iframe-wrapper"
                            style={{
                                position: 'relative',
                                width: '100%',
                                height: 0,
                                paddingBottom: '56.25%', // 16:9 aspect ratio
                                backgroundColor: '#000'
                            }}
                        >
                            <iframe
                                src={`${getYouTubeEmbedUrl(currentVideoUrl)}?autoplay=1&rel=0&showinfo=0`}
                                title={currentVideoTitle}
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen
                                className="video-modal-iframe"
                                style={{
                                    position: 'absolute',
                                    top: 0,
                                    left: 0,
                                    width: '100%',
                                    height: '100%'
                                }}
                            ></iframe>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ReferenceDetailPage;
