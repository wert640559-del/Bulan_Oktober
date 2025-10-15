import ThemedButton from "./components/Theme/ThemedButton";
import ThemeProvider from "./components/Theme/ThemeProvider";
import UserProvider from "./components/dataUser/UserProvider";
import UserInfoDisplay from "./components/dataUser/UserInfoDisplay";
import LanguageProvider from "./components/languageNotification/LanguageProvider";
import NotificationProvider from "./components/languageNotification/NotificationProvider";
import Header from "./components/languageNotification/Header";
import ThemedParagraph from "./components/Theme/ThemedParagraph";
import ThemedImage from "./components/Theme/ThemedImage";
import CartProvider from "./components/cart/CartProvider";
import ProductList from "./components/cart/ProductList";
import CartDisplay from "./components/cart/CartDisplay";
import './App.css'

export default function App() {
  return (
    <ThemeProvider>
      <UserProvider>
        <LanguageProvider>
          <NotificationProvider>
            <CartProvider>
              <div className="app-container">
                {/* User Info Section */}
                <div className="app-section user-info-container">
                  <UserInfoDisplay />
                </div>

                {/* Theme Components Section */}
                <div className="app-section">
                  <ThemedButton />
                  <ThemedParagraph />
                  <ThemedImage />
                </div>

                {/* Header Section */}
                <div className="app-section header-container">
                  <Header />
                </div>

                {/* Shopping Cart Section */}
                <div className="app-section cart-section">
                  <h2>🛍️ Shopping Cart Context</h2>
                  <ProductList />
                  <CartDisplay />
                </div>
              </div>
            </CartProvider>
          </NotificationProvider>
        </LanguageProvider>
      </UserProvider>
    </ThemeProvider>
  );
}