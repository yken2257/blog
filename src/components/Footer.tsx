import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faTwitter, faLinkedin  } from "@fortawesome/free-brands-svg-icons";
import Link from 'next/link';

const Footer = () => {
    const today = new Date();
    return (
<footer className="p-10 text-center leading-loose">
	<div>
		<Link href="https://github.com/yken2257" className="text-gray-500 hover:text-gray-950" target="_blank">
			Github
		</Link>
		<Link href="https://www.linkedin.com/in/kento-yoshida" className="text-gray-500 hover:text-indigo-600" target="_blank">
			LinkedIn
			{/* <FontAwesomeIcon icon={faLinkedin} size="xl" /> */}
		</Link>
		<a href="/rss.xml" className="text-gray-500 hover:text-amber-600" target="_blank">
			<i className="fa-solid fa-square-rss fa-xl px-1.5"></i>
		</a>
		<a href="https://instagram.com/kkenyoshi" className="text-gray-500 hover:text-pink-500" target="_blank">
			<i className="fa-brands fa-instagram fa-xl px-1.5"></i>
		</a>
		<a href="https://twitter.com/kkenyoshi" className="text-gray-500 hover:text-blue-500" target="_blank">
			<i className="fa-brands fa-twitter fa-xl px-1.5"></i>
		</a>
	</div>
	<div className="text-gray-500">
		&copy; {today.getFullYear()} SHIRO SPACE. All rights reserved.
	</div>
</footer> 
   );
  };
  
  export default Footer;