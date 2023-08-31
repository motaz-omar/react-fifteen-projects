import CocktailList from "../components/CocktailList";
import SearchForm from "../components/SearchForm";
import Navbar from "../components/Navbar";

import { AppProvider } from "../context";
export default function Home() {
  return (
    <AppProvider>
      <Navbar />
      <SearchForm />
      <CocktailList />
    </AppProvider>
  );
}
