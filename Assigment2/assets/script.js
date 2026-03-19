const pages = {
    intro: `
    <section class = "intro">
        <div class = "intro-left">
            <img class = "intro-avatar" src="assets/img/avatar.jpg" alt="Avatar">
        </div>
        <div class = "intro-right">
            <h1>Helloooo!</h1>
            <p>My name is Nguyen Dang Phuoc, you may call me Phuoc. I am a Web Developer and UI/UX Designer from Ho Chi Minh City, Viet Nam.</p>
            <p>I have a passion for creating beautiful, functional, and user-friendly websites and applications.</p>
            <div class="intro-contact">
            <div class="contact-item">📧 nguyendangphuoc2501@gmail.com</div>
            <div class="contact-item">📍 Ho Chi Minh City, Viet Nam</div>
            <div class="contact-item">💼 github.com/NguyenDangPhuocTMDT2024</div>
            <div class="contact-item">📱 (+84) 0937548537</div>
    </div>
        </div>
    </section>
    `, 
    project:`
    <section class = "projects">
        <div class = "first-project">
            <h2>EasyCommerce</h2>
            <h3>Description</h3>
            <p>EasyCommerce là ứng dụng hỗ trợ những người không có kiến thức kinh doanh (sinh viên, cá nhân bán hàng lần đầu) có thể bắt đầu bán hàng trên các nền tảng Social Commerce như TikTok Shop một cách đơn giản. Ứng dụng tập trung vào việc hướng dẫn từng bước, tự động hóa quy trình cơ bản và giảm rào cản khi tham gia thương mại điện tử.</p>
            <h3>Target</h3>
            <ul>
                <li>Giúp người mới mở gian hàng nhanh</li>
                <li>Đơn giản hóa vận hành đơn hàng</li>
                <li>Hỗ trợ bán hàng thông qua livestream, affiliate và UGC</li>
                <li>Tích hợp thanh toán và logistics ở mức cơ bản</li> 
            </ul>
            <h3>My Role</h3>
            <p>Thiết kế giao diện người dùng (UI/UX) cho ứng dụng EasyCommerce, đảm bảo trải nghiệm người dùng thân thiện và dễ sử dụng.</p>
            <h3>Technologies Used</h3>
            <p>Figma, Adobe XD, Sketch</p>
        </div>
        <div class = "second-project">
            <h2>UGC-Based Digital Product Marketplace for Students</h2>
            <h3>Description</h3>
            <p>Xây dựng mô hình startup TMĐT kinh doanh sản phẩm số (template, tài liệu học tập, creator toolkit) do chính sinh viên tạo ra, áp dụng mô hình UGC và chia sẻ doanh thu.</p>
            <h3>Target</h3>
            <ul>
                <li>Cung cấp nền tảng để sinh viên tạo và bán các sản phẩm số</li>
                <li>Cho phép sinh viên chia sẻ sáng tạo và kiếm thu nhập</li>
                <li>Cung cấp một nền tảng để sinh viên khám phá và mua sản phẩm số</li>
            </ul>
            <h3>My Role</h3>
            <p>Thiết kế giao diện người dùng (UI/UX) cho nền tảng TMĐT dựa trên UGC, tập trung vào việc tạo ra một nền tảng trực quan và hấp dẫn dành cho sinh viên.</p>
            <h3>Technologies Used</h3>
            <p>React Native, JavaScript, Firebase</p>
        </div>
    </section>
    `, 
    experience:`
    <section class = 'experience'>
        <div class="experience-item">
        <h2>Internship at FPT Software</h2>
        <p>Worked on developing web applications using React and Node.js. Gained experience in front-end and back-end development, as well as collaborating with a team of developers.</p>
        </div>
        <div class="experience-item">
        <h2>Freelance Frontend Developer & UI/UX Designer</h2>
        <p>Worked on multiple student and personal projects, focusing on building clean, responsive user interfaces and improving user experience. Developed web frontends using HTML, CSS, and JavaScript, ensuring usability across different devices.</p>
        <p>In parallel, designed UI/UX flows, wireframes, and prototypes with an emphasis on simplicity and user-centered design. Collaborated with teammates to translate business requirements into intuitive and practical interfaces.</p>
        </div>
        <div class="experience-skills">
        <h2>Skills & Tools</h2>
        <ul>
            <li>Frontend: HTML, CSS, JavaScript, Bootstrap, React</li>
            <li>UI/UX: Figma, Wireframing, Prototyping, Adobe XD, Sketch</li>
            <li>Tools: Git, GitHub, VS Code</li>
        </ul>
        </div>
    </section>
    `,
    hobby:`
    <section class = "hobbies">
        <div class="hobby-item">
        <h2>Sports</h2>
        <p>Playing football and billiards are my favorite sports. They help me stay fit and relieve stress after long study sessions.</p>
        </div>
        <div class="hobby-item">
        <h2>Traveling</h2>
        <p>Exploring new places and cultures is one of my passions. Traveling broadens my horizons and inspires me in both my personal and professional life.</p>
        </div>
        <div class="hobby-item">
        <h2>Volunteer</h2>
        <p>I enjoy participating in community service and volunteer activities. Giving back to the community is important to me and helps me develop empathy and social responsibility.</p>
        </div>
        <div class="hobby-item">
        <h2>Learning</h2>
        <p>I am passionate about learning new skills and knowledge, especially in the fields of web development and design. I regularly take online courses and read books to stay updated with the latest trends and technologies.</p>
    </section>
    `, 
    strength:`
    <section class = 'strength'>
        <div class="strength-items">
        <h2>Problem-Solving</h2>
        <p>I have a strong ability to analyze problems and find effective solutions. This skill has helped me overcome challenges in both my academic and professional endeavors.</p>
        </div>
        <div class="strength-items">
        <h2>Communication</h2>
        <p>I excel in communicating ideas clearly and effectively, whether it's through writing or verbal communication. This strength has been valuable in team collaborations and client interactions.</p>
        </div>
        <div class="strength-items">
        <h2>Adaptability</h2>
        <p>I am highly adaptable and open to change. I thrive in dynamic environments and can quickly adjust to new situations and challenges.</p>
        </div>
        <div class="strength-items">
        <h2>Creativity</h2>
        <p>I possess a creative mindset that allows me to think outside the box and come up with innovative ideas. This strength has been particularly useful in design and problem-solving tasks.</p>
        </div>
    </section>
    `,
    book:` 
    <section class = 'book'>
        <h2>Recommended Books</h2>
        <ul>
            <li>"Clean Code" by Robert C. Martin - A must-read for any developer looking to improve their coding practices.</li>
            <li>"The Pragmatic Programmer" by Andrew Hunt and David Thomas - Offers practical advice and tips for software development.</li>
            <li>"Design Patterns: Elements of Reusable Object-Oriented Software" by Erich Gamma, Richard Helm, Ralph Johnson, and John Vlissides - A classic book on software design patterns.</li>
        </ul>
        <div class="book-images">
            <img src="assets/img/books/cleancode.jpg" alt="Clean Code">
            <img src="assets/img/books/pragmatic_programmer.jpg" alt="The Pragmatic Programmer">
            <img src="assets/img/books/design_patterns.jpg" alt="Design Patterns">
        </div> 
    </section>
    `,
    certificate: `
    <section class = 'certificate'>
        <h2>Certifications</h2>
        <ul>
            <li>Responsive Web Design - <strong>freeCodeCamp</strong></li>
            <li>Front-End Development Libraries - <strong>freeCodeCamp</strong></li>
            <li>Google UX Design Profession Certificate - <strong>Coursera</strong></li>
            <li>JavaScript Specialist - <strong>DEF Organization</strong></li>
            <li>Bachelor of Science in E-Commerce - <strong>University of Information Technology, VNU-HCM</strong></li>
        </ul>
    </section>
    `,
    gallery:`
    <section class = 'gallery'>
        <h2>Photo Gallery</h2>
        <div class="photo-grid">
            <img src="assets/img/me/photo-1.jpg" alt="Photo 1">
            <img src="assets/img/me/photo-2.jpg" alt="Photo 2"> 
            <img src="assets/img/me/photo-3.jpg" alt="Photo 3">
            <img src="assets/img/me/photo-4.jpg" alt="Photo 4">
        </div>
    </section>  
    `
};
var content = document.getElementById('content');
function showPage(page) {
    content.innerHTML = pages[page];
}
var buttons = document.querySelectorAll('.menu button');
buttons[0].classList.add('highlight');
buttons.forEach(function(button) {
    button.addEventListener('click', function() {
        buttons.forEach(function(btn) {
            btn.classList.remove('highlight');
        });
        this.classList.add('highlight');
    }); 
});
showPage('intro');