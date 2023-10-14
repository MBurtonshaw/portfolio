import { React } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';

export default function Header() {
    return(
        <div id='header_div'>
            <div id='helmet_div'>
                <HelmetProvider>
                    <Helmet>
                        <meta charset="UTF-8" />
                        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                        <meta name="description" content="Treehouse Full Stack JavaScript Project 10 | Full Stack App with React and a REST API" />
                        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                        <link rel="shortcut icon" href="../favicon.ico" type="image/x-icon" />
                        <title>
                            Burtonshaw Portfolio
                        </title>
                        <link href="../../App.css" rel="stylesheet" />
                        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js" />
                        <script src='../../js/slide.js' />
                        <script src='../../js/mobile.js' />
                    </Helmet>
                </HelmetProvider>
            </div>
        </div>
    );
}