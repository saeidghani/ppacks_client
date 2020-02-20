import React from "react";
import Link from "next/link";

import {LogoContainer} from "./LogoStyles";

function Logo(){
    return (
        <LogoContainer>
            <Link href='/'>
                <a>
                    ppacks
                </a>
            </Link>
        </LogoContainer>
    )
}

export default Logo;