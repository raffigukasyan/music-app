import "./styles/main.css";
import Providers from "@/app/providers/Providers.tsx";
import AppRouter from "@/app/routes/AppRouter.tsx";
export default function App() {
    return <Providers>
        <AppRouter />
    </Providers>
}