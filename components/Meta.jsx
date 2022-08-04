import Head from 'next/head'

const Meta = ({ title, keywords, description }) =>{
    return (
        <Head>
            <meta charSet="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta name="keywords" content={keywords} />
            <meta name="description" content={description} />
            <title>{title}</title>
        </Head>
    )
}

Meta.defaultProps = {
    title: 'Hulu 2.0',
    keywords: 'Hulu 2.0, shalom brand, web developer, mentis, adeoye solomon',
    description: 'Hulu 2.0 by Adeoye Solomon Oluwatobi'
}

export default Meta
