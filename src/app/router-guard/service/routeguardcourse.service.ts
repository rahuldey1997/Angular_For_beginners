import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class RouteGuardCoursesService {
  courses = [
    { id: 11, courseName: 'Introduction to Programming', author: 'John Doe', price: 99.99, duration: '6 weeks', courseType: 'Online', description: 'Learn the basics of programming using Python. No prior experience required.' },
    { id: 12, courseName: 'Data Science Basics', author: 'Jane Smith', price: 149.99, duration: '8 weeks', courseType: 'Online', description: 'Get started with data science and learn how to analyze data using Python and R.' },
    { id: 13, courseName: 'Advanced JavaScript', author: 'Michael Brown', price: 199.99, duration: '4 weeks', courseType: 'Online', description: 'Deep dive into JavaScript and learn advanced concepts and techniques for modern web development.' },
    { id: 14, courseName: 'Web Development Bootcamp', author: 'Emily White', price: 299.99, duration: '12 weeks', courseType: 'Online', description: 'Comprehensive web development course covering HTML, CSS, JavaScript, and frameworks like React and Node.js.' },
    { id: 15, courseName: 'Machine Learning A-Z', author: 'David Johnson', price: 249.99, duration: '10 weeks', courseType: 'Online', description: 'Master machine learning algorithms and techniques using Python and R. Includes practical projects.' },
    { id: 16, courseName: 'Introduction to Cybersecurity', author: 'Sarah Lee', price: 129.99, duration: '6 weeks', courseType: 'Online', description: 'Learn the fundamentals of cybersecurity and how to protect systems and data from cyber threats.' },
    { id: 17, courseName: 'Digital Marketing', author: 'Chris Martin', price: 199.99, duration: '8 weeks', courseType: 'Online', description: 'Understand the basics of digital marketing, including SEO, social media marketing, and email campaigns.' },
    { id: 18, courseName: 'Graphic Design Masterclass', author: 'Laura Wilson', price: 179.99, duration: '10 weeks', courseType: 'Online', description: 'Learn graphic design principles and tools like Photoshop and Illustrator to create stunning visuals.' },
    { id: 19, courseName: 'Financial Analysis', author: 'Robert Garcia', price: 159.99, duration: '6 weeks', courseType: 'Online', description: 'Develop skills in financial analysis and learn how to interpret financial statements and data.' },
    { id: 20, courseName: 'Photography Basics', author: 'Linda Martinez', price: 99.99, duration: '4 weeks', courseType: 'Online', description: 'Explore the fundamentals of photography, including camera settings, composition, and editing techniques.' }
  ];
}