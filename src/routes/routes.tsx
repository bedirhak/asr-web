import { Routes, Route, Navigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <>
        <Header />
        {children}
        <Footer />
    </>
);

const importPages = () => {
    const pages = import.meta.glob("../pages/**/page.tsx", { eager: true });
    const routes: { path: string; element: React.ReactElement }[] = [];

    Object.keys(pages).forEach((key) => {
        const match = key.match(/\/pages\/(.*?)\/page\.tsx$/);

        if (match) {
            const routePath = match[1].toLowerCase(); // Klasör adını URL olarak kullan
            const Component = (pages[key] as any).default;
            routes.push({
                path: routePath === "home" ? "/" : `/${routePath}`,
                element: (
                    <Layout>
                        <Component />
                    </Layout>
                ),
            });
        }
    });

    return routes;
};

const AppRoutes = () => {
    const routes = importPages();

    return (
        <>
            <ScrollToTop />
            <Routes>
                {routes.map((route, index) => (
                    <Route key={index} path={route.path} element={route.element} />
                ))}
                {/* Bilinmeyen rotalar için yönlendirme */}
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        </>
    );
};

export default AppRoutes;
