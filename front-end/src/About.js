import React, { useEffect  , useState} from "react";

const About = () => {
    const [aboutContent, setAboutContent] = useState({ title: '', paragraphs: [], imageUrl: '' });
    useEffect(() =>
    {
        const fetchData = async () =>
        {
            try {
                const response = await fetch(('http://localhost:5002/about-me'));
                const data = await response.json()
                console.log(data)
                setAboutContent(data)
            }
            catch (error)
            {
                console.error('error fetching about us content' ,  error)
            }
        }
        fetchData()
    } , []) // effect runs once on mount
    return (
        <div>
        <h1>{aboutContent.title}</h1>
        {aboutContent.paragraphs.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
        <img src={aboutContent.imageUrl} alt="My photo" />
      </div>
        
    );
    }
export default About;