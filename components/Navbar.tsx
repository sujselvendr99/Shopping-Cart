import {Container,Nav,Button, Navbar as NavbarBs} from "react-bootstrap"
import {NavLink} from "react-router-dom"
import { useShoppingCart } from "../context/ShoppingCartContext"

export function Navbar() {
    const {openCart, cartQuantity} = useShoppingCart()
    return (
    <NavbarBs sticky= "top" className = "bg-white shadow-sm mb-3">
        <Container>
            <Nav className = "me-auto">
                <Nav.Link to="/" as={NavLink}>
                    Home
                </Nav.Link>
                <Nav.Link to="/store" as={NavLink}>
                    Store
                </Nav.Link>
                <Nav.Link to="/about" as={NavLink}>
                    About
                </Nav.Link>
            </Nav>
            {cartQuantity > 0 && (
            <Button onClick={openCart} style = {{width: "3rem", height: "3rem", position: "relative"}}
            variant = "outline-primary"
            className = "rounded-circle">
            <svg
          viewBox="0 0 512 512"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M 427.898 87.573 c -2.279 -2.776 -5.682 -4.386 -9.273 -4.386 H 75.668 L 64.289 24.474 c -1.094 -5.642 -6.035 -9.717 -11.781 -9.717 H 12 c -6.629 0 -12 5.373 -12 12 s 5.371 12 12 12 h 30.609 l 51.674 270.404 c 1.01 5.738 5.994 9.922 11.818 9.922 h 42.388 c -22.757 4.122 -40.076 24.067 -40.076 47.995 c 0 26.902 21.887 48.79 48.79 48.79 c 26.902 0 48.787 -21.887 48.787 -48.79 c 0 -23.927 -17.316 -43.872 -40.074 -47.995 h 155.855 c -22.758 4.122 -40.078 24.067 -40.078 47.995 c 0 26.902 21.889 48.79 48.793 48.79 c 26.902 0 48.789 -21.887 48.789 -48.79 c 0 -23.927 -17.318 -43.872 -40.074 -47.995 h 36.541 c 6.627 0 12 -5.373 12 -12 c 0 -6.628 -5.373 -12 -12 -12 H 116.176 L 112.5 274.17 h 272.992 c 5.729 0 10.656 -4.047 11.772 -9.665 l 33.131 -166.982 C 431.093 94 430.177 90.349 427.898 87.573 Z M 355.277 367.077 c 0 13.669 -11.121 24.789 -24.789 24.789 c -13.67 0 -24.793 -11.12 -24.793 -24.789 s 11.123 -24.789 24.793 -24.789 C 344.156 342.289 355.277 353.408 355.277 367.077 Z M 181.992 367.077 c 0 13.669 -11.119 24.789 -24.787 24.789 c -13.67 0 -24.791 -11.12 -24.791 -24.789 s 11.121 -24.789 24.791 -24.789 C 170.872 342.289 181.992 353.408 181.992 367.077 Z M 108.035 250.17 L 91.76 166.207 h 45.29 l 13.795 83.963 H 108.035 Z M 230.158 250.17 h -54.992 l -13.795 -83.963 h 68.787 V 250.17 Z M 310.015 250.17 h -55.857 v -83.963 h 67.91 L 310.015 250.17 Z M 375.64 250.17 h -41.379 l 12.053 -83.963 h 45.984 L 375.64 250.17 Z M 397.06 142.208 H 87.109 l -6.789 -35.02 h 323.689 L 397.06 142.208 Z" fill="currentColor"/>
        </svg>
        <div className = "rounded-circle bg-dark d-flex justify-content-center align-items-center"
        style={{
            color:"white", 
            width: "1.5rem", 
            height: "1.5rem", 
            position: "absolute",
            bottom:0, 
            right: 0,
            transform: "translate(25%, 25%)"
            }}
            >
                {cartQuantity}
                </div>
            </Button>
            )}
        </Container>
    </NavbarBs>
    )
}