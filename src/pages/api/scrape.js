import axios from "axios";
import * as cheerio from "cheerio";

export default async function handler(req, res){
    try{
        const url = 'https://br.linkedin.com/jobs/desenvolvedor-wordpress-vagas?trk=expired_jd_redirect&position=1&pageNum=0';
        const response = await axios.get(url);

        const html = response.data;
        const $ = cheerio.load(html)

        const jobs = []
        $('li').each((i, el) => {
            const title = $(el).find('h3').text().trim();
            const company = $(el).find('h4').text().trim();
            const link = $(el).find('a').attr('href');
            
            if(title && company)
                jobs.push({title, company, link});
        });

        res.status(200).json({jobs});
    }catch(error){
        res.status(500).json({error: 'Error', details: error.message})
    }
}