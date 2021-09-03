/**
 * Mandatory fields:
 * id (unique), title, description
 */

const projectList = [
	{
		"id": "portfolio",
		"title": "My Portfolio",
		"description": "This website!",
		"role": "Frontend Developer",
		"technologies": ["ReactJS", "Material-UI v5", "GitHub Pages"],
		"image": "https://source.unsplash.com/random/640x360/?minimalist",
		"date": 2021,
		"blurb": "This is a website showcasing my projects and experience. The content of this project is templatized such that anyone can fork the repo and quickly build a portfolio site. To add additional project and experience, the user would only need to edit a JSON file.",
		"links" : {
			"trust the recursion" : "https://sarahngg.github.io/",
			"repo" : "https://github.com/sarahngg/sarahngg.github.io"
		}
	},
	{
		"id": "chatroom",
		"title": "Chatroom App",
		"description": "A full-stack chatroom application",
		"role": "Fullstack Developer",
		"technologies": ["JavaScript", "Node.js", "MongoDB", "CSS"],
		"image": "https://res.cloudinary.com/sng/image/upload/v1630534979/portfolio/chatapp.jpg",
		"date": 2020,
		"blurb": "Created a Single-page Application with vanilla JavaScript. Styled the GUI with CSS. Implemented WebSocket client and server for communication. Set up a MongoDB database for the application, created REST endpoints for reading objects from the database. Implemented a simple authentication mechanism, protected server resources from unauthorized users by using session cookies, sanitize user input to defend against Cross-Site Scripting attacks.",
		"links" : {
			"demo": "https://youtu.be/Ttwih3m7DK8"
		}
	},
	{
		"id": "community-centre",
		"title": "Community Centre Database",
		"description": "Manage classes, memberships, and equipment",
		"role": "Database Developer",
		"technologies": ["SQL", "CSS"],
		"image": "https://res.cloudinary.com/sng/image/upload/v1630430587/portfolio/cc.png",
		"date": 2020,
		"blurb": "(Note: The project is hosted on UBC student server which may only allow certain operations.) Designed, implemented, and populated a relational database application using relational database knowlege, extended website templates for SQL*Plus, PHP, and HTML. Styled website with CSS.",
		"links" : {
			"demo link" : "https://www.students.cs.ubc.ca/~sarahn26/cc.php"
		}
	},
	{
		"id": "gh-issue",
		"title": "GitHub Issue Viewer",
		"description": "A frontend app to view issues of a public repo",
		"role": "Frontend Developer",
		"technologies": ["ReactJS", "Redux", "GitHub API", "GitHub Pages"],
		"image": "https://res.cloudinary.com/sng/image/upload/v1630535135/portfolio/ghissue.jpg",
		"date": 2019,
		"blurb": "The web application contains a search page with a search bar where users can paste a piblic GitHub repo URL. Using GitHub Issues API, the results page displays all (open, closed, pull requests) issues from the search query, and they are filterable by issue types. Issue types are indicated using the icons. Fetching errors are covered.",
		"links" : {
			"repo" : "https://github.com/sarahngg/gh-issues-viewer",
			"demo" : "https://sarahngg.github.io/gh-issues-viewer/"
		}
	},
	{
		"id": "learnoncology",
		"title": "LearnOncology.ca",
		"description": "Educational resource about oncology management",
		"role": "Webmaster",
		"technologies": ["Webflow Designer & Editor", "CSS", "SEO"],
		"image": "https://res.cloudinary.com/sng/image/upload/b_rgb:ffffff,bo_100px_solid_rgb:ffffff/v1630358741/portfolio/lo.png",
		"blurb": "I decreased the load time by 75% through migrating content from the old Wordpress site to Webflow. I redesigned the learning resources and its templates using CSS concepts in Webflow. As non-technical content editors would be adding contents to the site, I created quick guides and detailed tutorial documentations. In addition, I managed SEO and integrated the site with Google Analytics.",
		"links" : {
			"link" : "https://learnoncology.ca"
		}
	},
  {
		"id": "lorem-ipsum",
		"title": "Lorem Ipsum",
		"description": "de Finibus Bonorum et Malorum",
		"image": "https://source.unsplash.com/random/640x360/?placeholder",
		"blurb": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Euismod quis viverra nibh cras. Sit amet est placerat in. Aliquam sem fringilla ut morbi tincidunt. Mauris commodo quis imperdiet massa tincidunt nunc pulvinar sapien et. Nibh mauris cursus mattis molestie a iaculis at erat pellentesque. Ultricies mi eget mauris pharetra et ultrices. Elit pellentesque habitant morbi tristique senectus et netus et. Ut aliquam purus sit amet luctus venenatis. Dignissim sodales ut eu sem integer. Amet porttitor eget dolor morbi non. Ut porttitor leo a diam sollicitudin tempor. At urna condimentum mattis pellentesque id nibh tortor. Facilisis leo vel fringilla est ullamcorper eget nulla. Tristique et egestas quis ipsum suspendisse ultrices. Rutrum tellus pellentesque eu tincidunt tortor aliquam nulla facilisi cras. Egestas quis ipsum suspendisse ultrices gravida dictum. Odio euismod lacinia at quis risus sed. Vitae et leo duis ut diam. Neque gravida in fermentum et. Ac turpis egestas sed tempus urna. Gravida quis blandit turpis cursus in hac. Elementum nisi quis eleifend quam adipiscing. Euismod quis viverra nibh cras pulvinar. Sed felis eget velit aliquet sagittis. Sed adipiscing diam donec adipiscing tristique risus. Nunc vel risus commodo viverra maecenas accumsan lacus vel facilisis. Integer enim neque volutpat ac. Odio aenean sed adipiscing diam donec adipiscing tristique risus. Turpis massa sed elementum tempus. Netus et malesuada fames ac turpis. Dignissim cras tincidunt lobortis feugiat vivamus at augue eget."
	}
]

const users = [{
	"id": "sn",
	"userInfo": {
		"name": "Sarah Ng",
		"tagline": "Full-stack Web Developer",
	},
	"siteTitle": "Sarah Ng | My Portfolio",
	"sections": [
		{
			"id": "project",
			"name": "Projects",
			"description": "Things I did",
			"view": "board",
			"contentList": projectList
		},
		{
			"id": "work",
			"name": "Work Experience",
			"description": "",
			"view": "resume",
			"contentList": []
		}
	]
},{
	"id": "jy",
	"userInfo": {
		"name": "Jessie Yau",
		"tagline": "hehehe"
	}
}]

module.exports = {users};