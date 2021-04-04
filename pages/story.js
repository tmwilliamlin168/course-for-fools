import Head from 'next/head';
import Link from 'next/link';

import Header from '../components/header';

export default function Story() {
    return (
        <>
            <Head>
                <title>CP: Zero to Hero | Story</title>
            </Head>
            <div className="bg-gray-100 min-h-screen px-4">
                <Header />
                <div className="-mt-16 pt-24 pb-8 max-w-prose mx-auto">
                    It was March 32nd, 2021. It was 1 am, and I sat at my desk, just remembering that I had promised someone I would make a course by April 2021. I realized that I had made no progress at all, so I got to work.
                    <br />
                    <br />
                    I had some web development experience, but there will still things that were challenging for me. For one, I have never worked with authentication before. Thankfully, Firebase made it easy. I got it to work after about 2 hours and then I went to sleep.
                    <br />
                    <br />
                    I had a hard time sleeping due to the tight deadline, and at around 7am I couldn't sleep any more. I worked on the backend infrastructure for the assessment for a few hours. In the afternoon, I started to come up with more problems and implement them into both the frontend and the backend.
                    <br />
                    <br />
                    Originally, I planned to have a total of 10 problems, but around 4pm I was only done with 8. I decided to try and make the UI look prettier. I also had to come up with a favicon and a cover image. I couldn't really think of anything good for the favicon so I just used favicon.io and put in the word "CP". For the cover, I just put my programs for <a href="https://codeforces.com/contest/4/problem/A" className="text-blue-500 hover:text-blue-600 transition">Watermelon</a> and <a href="https://codeforces.com/contest/71/problem/A" className="text-blue-500 hover:text-blue-600 transition">Way Too Long Words</a> into Photoshop and used some 3D transformations.
                    <br />
                    <br />
                    Later at night, I started sending the site for people to test and I started promoting it. There were a few production bugs, which were embarassing. For the last problem, I didn't configure the problem correctly and it actually made the problem possible to solve, which was not the intention. People were solving the problem and asking why their scores didn't update. I've also heard some issues with authentication for firefox but if you don't use Chrome then screw you.
                    <br />
                    <br />
                    Overall, things worked out smoothly. People were pre-registering and failing to pass. Some people soon realized that the last 3 problems were impossible, while others were emailing me, asking for more chances.
                    <br />
                    <br />
                    Fast forward to 4/2, I decided it was time to send out <Link href="/result"><a className="text-blue-500 hover:text-blue-600 transition">decision letters</a></Link> to the 7000+ people who have pre-registered. I tried the mailgun API at night and I started sending out emails with it on 4/3 in the afternoon. I didn't use the API efficiently and it took over 2 hours to send the emails but as expected, people got rickrolled!
                    <br />
                    <br />
                    The next day, I decided that it was a good time to explicitly declare this course a joke and also to present the solutions:
                    <br />
                    <br />
                    Problem 1:
                    <br />
                    6
                    <br />
                    <br />
                    Problem 2:
                    <br />
                    25
                    <br />
                    <br />
                    Problem 3:
                    <br />
                    One possible solution is:
                    <br />
                    <code>
                        .#.#.<br />
                        .....<br />
                        #.#.#<br />
                        .....<br />
                        .#.#.
                    </code>
                    <br />
                    <br />
                    Problem 4:
                    <br />
                    0, 0, 0
                    <br />
                    <br />
                    Problem 5:
                    <br />
                    <code>
                        .#.<br />
                        .#.<br />
                        ###
                    </code>
                    <br />
                    <br />
                    Problem 6:
                    <br />
                    Notice that you gain 0.5 extra regions if you capture a border cell and 0 otherwise. The strategy is then obvious, and it's also obvious that the best both of you can do is tie.
                    <br />
                    <br />
                    Problem 7:
                    <br />
                    It's always possible for Bob to achieve the goal. See <a href="https://www.reddit.com/r/mathriddles/comments/2v6eaj/doubling_and_adding_1/" className="text-blue-500 hover:text-blue-700 transition">this</a>.
                    <br />
                    <br />
                    Problem 8:
                    <br />
                    By a simple invariant argument, it's impossible to have 1 stone left.
                    <br />
                    <br />
                    By the time of this writing, there have been 8474 pre-registrations. The GitHub repository for this website is <a href="https://github.com/tmwilliamlin168/course-for-fools" className="text-blue-500 hover:text-blue-700 transition">here</a>. Thanks to CJ Quines and Cynthia Du for help with the website. Thanks to Nathan Wang for providing the template for the landing page. And most importantly, thanks to all of you who fell for the prank :)
                </div>
            </div>
        </>
    );
}