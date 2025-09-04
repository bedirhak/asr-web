import React, { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaFilter, FaPlay, FaTimes, FaExternalLinkAlt, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

// Project interfaces
interface Project {
    id: string;
    title: string;
    description: string;
    categories: string[];
    referenceCompany: string;
    referenceSlug: string;
    completionDate: string;
    location: string;
    youtubeUrl?: string;
    thumbnail?: string;
}

// Tüm projeler listesi (sadece YouTube videosu olanlar)
const allProjects: Project[] = [
    // OVEMMAK
    {
        id: "ovemmak-1",
        title: "Makine Kurulum Tanıtım Filmi",
        description: "Dev makine montajının tüm aşamalarını baştan sona belgeleyen profesyonel tanıtım filmi",
        categories: ["Tanıtım Filmleri", "Kurumsal Video"],
        referenceCompany: "OVEMMAK",
        referenceSlug: "ovemmak",
        completionDate: "Mart 2023",
        location: "İstanbul",
        youtubeUrl: "https://www.youtube.com/watch?v=Oft3zL17aHQ"
    },

    // MKC GROUP
    {
        id: "mkc-1",
        title: "Emlak Projesi Drone Çekimleri",
        description: "İnşaatın temeli atılırken, beton döküm aşamaları ve özel kazı makinelerinin çalışmaları 4K kalitede kayda alındı",
        categories: ["Drone Çekimleri", "Emlak Çekimleri"],
        referenceCompany: "MKC GROUP",
        referenceSlug: "mkc",
        completionDate: "Eylül 2025",
        location: "İstanbul",
        youtubeUrl: "https://www.youtube.com/watch?v=1wusDoN2s_w"
    },

    // SEMİZOĞLU TRAKTÖR
    {
        id: "semizoglu-1",
        title: "Tanıtım Filmi Çekimleri",
        description: "Bayinin kurumsal yapısı ve sergilenen ürünler 4K çözünürlükte hazırlanan profesyonel tanıtım filmi",
        categories: ["Tanıtım Filmleri", "Kurumsal Video"],
        referenceCompany: "SEMİZOĞLU TRAKTÖR BAYİSİ",
        referenceSlug: "semizoglu-traktor",
        completionDate: "Eylül 2025",
        location: "Ankara",
        youtubeUrl: "https://www.youtube.com/watch?v=yuJlm9rvLpE"
    }
];

// Yeni kategoriler listesi
const allCategories = [
    "Drone Çekimleri",
    "Tanıtım Filmleri",
    "Sosyal Medya Çekimleri",
    "FPV Drone Çekimleri",
    "Emlak Çekimleri",
    "Web Sitesi Hizmetleri",
    "Reklam Filmleri",
    "Etkinlik Çekimleri",
    "Video Post-Prodüksiyon",
    "Ürün Fotoğrafçılığı",
    "360° Sanal Tur",
    "Grafik Tasarım",
    "Kurumsal Video"
];

// YouTube thumbnail URL'sini al
const getYouTubeThumbnail = (url: string): string => {
    const videoId = url.split('watch?v=')[1]?.split('&')[0];
    return videoId ? `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg` : '';
};

// YouTube URL'sini embed URL'sine çevir
const getYouTubeEmbedUrl = (url: string): string => {
    const videoId = url.split('watch?v=')[1]?.split('&')[0];
    return videoId ? `https://www.youtube.com/embed/${videoId}` : '';
};

const ProjectsPage: React.FC = () => {
    const navigate = useNavigate();
    const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
    const [isFilterOpen, setIsFilterOpen] = useState(true);

    // Video modal state
    const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
    const [currentVideoUrl, setCurrentVideoUrl] = useState('');
    const [currentVideoTitle, setCurrentVideoTitle] = useState('');
    const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

    // Filtrelenmiş projeler (sadece YouTube videosu olanlar gösterilir)
    const filteredProjects = useMemo(() => {
        return allProjects.filter(project => {
            // Sadece YouTube videosu olan projeler
            if (!project.youtubeUrl) return false;

            const matchesCategories = selectedCategories.length === 0 ||
                selectedCategories.some(category => project.categories.includes(category));

            return matchesCategories;
        });
    }, [selectedCategories]);    // Kategori toggle
    const toggleCategory = (category: string) => {
        setSelectedCategories(prev =>
            prev.includes(category)
                ? prev.filter(c => c !== category)
                : [...prev, category]
        );
    };

    // Tüm filtreleri temizle
    const clearFilters = () => {
        setSelectedCategories([]);
    };

    // Video popup
    const openVideoModal = (url: string, title: string) => {
        const videoIndex = filteredProjects.findIndex(project => project.youtubeUrl === url);
        setCurrentVideoIndex(videoIndex >= 0 ? videoIndex : 0);
        setCurrentVideoUrl(url);
        setCurrentVideoTitle(title);
        setIsVideoModalOpen(true);
        document.body.style.overflow = 'hidden';
    };

    const closeVideoModal = () => {
        setIsVideoModalOpen(false);
        setCurrentVideoUrl('');
        setCurrentVideoTitle('');
        document.body.style.overflow = 'unset';
    };

    const navigateVideo = (direction: 'prev' | 'next') => {
        let newIndex = currentVideoIndex;
        if (direction === 'prev') {
            newIndex = currentVideoIndex > 0 ? currentVideoIndex - 1 : filteredProjects.length - 1;
        } else {
            newIndex = currentVideoIndex < filteredProjects.length - 1 ? currentVideoIndex + 1 : 0;
        }

        const newProject = filteredProjects[newIndex];
        if (newProject && newProject.youtubeUrl) {
            setCurrentVideoIndex(newIndex);
            setCurrentVideoUrl(newProject.youtubeUrl);
            setCurrentVideoTitle(newProject.title);
        }
    };

    // ESC tuşu ile popup'ı kapatma ve ok tuşları ile navigasyon
    React.useEffect(() => {
        const handleKeyPress = (event: KeyboardEvent) => {
            if (!isVideoModalOpen) return;

            switch (event.key) {
                case 'Escape':
                    closeVideoModal();
                    break;
                case 'ArrowLeft':
                    if (filteredProjects.length > 1) {
                        navigateVideo('prev');
                    }
                    break;
                case 'ArrowRight':
                    if (filteredProjects.length > 1) {
                        navigateVideo('next');
                    }
                    break;
            }
        };

        if (isVideoModalOpen) {
            document.addEventListener('keydown', handleKeyPress);
        }
        return () => {
            document.removeEventListener('keydown', handleKeyPress);
            document.body.style.overflow = 'unset';
        };
    }, [isVideoModalOpen, filteredProjects.length, currentVideoIndex]);

    return (
        <div className="projects-page">
            {/* Hero Section */}
            <div className="projects-hero">
                <div className="projects-hero-container">
                    <h1>Projelerimiz</h1>
                    <p>Gerçekleştirdiğimiz profesyonel projelerimizi kategorilere göre inceleyin</p>
                </div>
            </div>

            {/* Filters Section */}
            <div className="projects-filters">
                <div className="projects-filters-container">
                    {/* Filter Toggle */}
                    <button
                        className={`filter-toggle ${isFilterOpen ? 'active' : ''}`}
                        onClick={() => setIsFilterOpen(!isFilterOpen)}
                    >
                        <FaFilter />
                        Filtrele ({selectedCategories.length})
                    </button>

                    {/* Clear Filters */}
                    {selectedCategories.length > 0 && (
                        <button className="clear-filters" onClick={clearFilters}>
                            <FaTimes />
                            Temizle
                        </button>
                    )}
                </div>                {/* Categories Filter */}
                {isFilterOpen && (
                    <div className="categories-filter">
                        <div className="categories-container">
                            <h3>Kategoriler</h3>
                            <div className="categories-grid">
                                {allCategories.map(category => (
                                    <button
                                        key={category}
                                        className={`category-tag ${selectedCategories.includes(category) ? 'active' : ''}`}
                                        onClick={() => toggleCategory(category)}
                                    >
                                        {category}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                )}
            </div>

            {/* Projects Grid */}
            <div className="projects-grid-section">
                <div className="projects-container">
                    {filteredProjects.length === 0 ? (
                        <div className="no-projects">
                            <h3>Proje bulunamadı</h3>
                            <p>Arama kriterlerinize uygun proje bulunmamaktadır.</p>
                            <button onClick={clearFilters} className="btn-primary">
                                Filtreleri Temizle
                            </button>
                        </div>
                    ) : (
                        <div className="projects-grid">
                            {filteredProjects.map(project => (
                                <div key={project.id} className="project-card">
                                    {/* Proje Kategorileri */}
                                    <div className="project-categories">
                                        {project.categories.map(category => (
                                            <span key={category} className="category-tag small">
                                                {category}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Video Thumbnail veya Placeholder */}
                                    <div className="project-media">
                                        {project.youtubeUrl ? (
                                            <div
                                                className="project-video-thumbnail"
                                                onClick={() => openVideoModal(project.youtubeUrl!, project.title)}
                                            >
                                                <img
                                                    src={getYouTubeThumbnail(project.youtubeUrl)}
                                                    alt={project.title}
                                                    className="thumbnail-image"
                                                />
                                                <div className="play-overlay">
                                                    <FaPlay />
                                                </div>
                                            </div>
                                        ) : (
                                            <div className="project-placeholder">
                                                <div className="placeholder-icon">🎬</div>
                                                <span>Video</span>
                                            </div>
                                        )}
                                    </div>

                                    {/* Proje Bilgileri */}
                                    <div className="project-info">
                                        <h3 className="project-title">{project.title}</h3>
                                        <p className="project-description">{project.description}</p>

                                        {/* Referans Şirketi */}
                                        <div className="project-reference">
                                            <span className="reference-label">Referans:</span>
                                            <button
                                                className="reference-link"
                                                onClick={() => navigate(`/reference-detail/${project.referenceSlug}`)}
                                            >
                                                {project.referenceCompany}
                                                <FaExternalLinkAlt />
                                            </button>
                                        </div>

                                        {/* Proje Meta */}
                                        {/* <div className="project-meta">
                                            <span className="project-date">{project.completionDate}</span>
                                            <span className="project-location">{project.location}</span>
                                        </div> */}
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>

            {/* Video Modal */}
            {isVideoModalOpen && (
                <div
                    className="video-modal-overlay"
                    onClick={closeVideoModal}
                >
                    <div
                        className="video-modal-content"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            className="video-modal-close"
                            onClick={closeVideoModal}
                        >
                            <FaTimes />
                        </button>

                        {/* Video Navigation Arrows */}
                        {filteredProjects.length > 1 && (
                            <>
                                <button
                                    className="video-nav-arrow video-nav-prev"
                                    onClick={() => navigateVideo('prev')}
                                    aria-label="Önceki Video"
                                    style={{
                                        position: 'absolute',
                                        left: '15px',
                                        top: '50%',
                                        transform: 'translateY(-50%)',
                                        width: '50px',
                                        height: '50px',
                                        backgroundColor: 'rgba(0, 0, 0, 0.7)',
                                        border: 'none',
                                        borderRadius: '50%',
                                        color: 'white',
                                        cursor: 'pointer',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        zIndex: 10001,
                                        transition: 'all 0.3s ease',
                                        fontSize: '24px'
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.backgroundColor = 'rgba(0, 0, 0, 0.9)';
                                        e.currentTarget.style.transform = 'translateY(-50%) scale(1.1)';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
                                        e.currentTarget.style.transform = 'translateY(-50%) scale(1)';
                                    }}
                                >
                                    <FaChevronLeft />
                                </button>

                                <button
                                    className="video-nav-arrow video-nav-next"
                                    onClick={() => navigateVideo('next')}
                                    aria-label="Sonraki Video"
                                    style={{
                                        position: 'absolute',
                                        right: '15px',
                                        top: '50%',
                                        transform: 'translateY(-50%)',
                                        width: '50px',
                                        height: '50px',
                                        backgroundColor: 'rgba(0, 0, 0, 0.7)',
                                        border: 'none',
                                        borderRadius: '50%',
                                        color: 'white',
                                        cursor: 'pointer',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        zIndex: 10001,
                                        transition: 'all 0.3s ease',
                                        fontSize: '24px'
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.backgroundColor = 'rgba(0, 0, 0, 0.9)';
                                        e.currentTarget.style.transform = 'translateY(-50%) scale(1.1)';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
                                        e.currentTarget.style.transform = 'translateY(-50%) scale(1)';
                                    }}
                                >
                                    <FaChevronRight />
                                </button>
                            </>
                        )}

                        <div className="video-modal-header">
                            <h3>{currentVideoTitle}</h3>
                            {filteredProjects[currentVideoIndex] && (
                                <p style={{
                                    color: '#ccc',
                                    margin: '8px 0 0 0',
                                    fontSize: '1rem',
                                    fontWeight: '400'
                                }}>
                                    {filteredProjects[currentVideoIndex].referenceCompany}
                                </p>
                            )}
                            {filteredProjects.length > 1 && (
                                <p style={{
                                    color: '#999',
                                    margin: '8px 0 0 0',
                                    fontSize: '0.9rem',
                                    fontWeight: '400'
                                }}>
                                    {currentVideoIndex + 1} / {filteredProjects.length}
                                </p>
                            )}
                        </div>

                        <div className="video-iframe-wrapper">
                            <iframe
                                src={`${getYouTubeEmbedUrl(currentVideoUrl)}?autoplay=1&rel=0&showinfo=0`}
                                title={currentVideoTitle}
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen
                            ></iframe>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ProjectsPage;
