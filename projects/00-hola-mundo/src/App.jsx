import { TwitterFollowCard } from "./TwitterFollowCard";
import './App.css';

export function App() {
    return(
        <section className="App">
            <TwitterFollowCard userName="midudev" >
                Ariel Hernandez
            </TwitterFollowCard>
            <TwitterFollowCard userName="elonmusk" >
                Elon Musk
            </TwitterFollowCard>
            <TwitterFollowCard userName="ibaillanos" >
                Ibai Llanos
            </TwitterFollowCard>
            <TwitterFollowCard userName="apple">
                Apple
            </TwitterFollowCard>
        </section>
    )
}