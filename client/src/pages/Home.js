import React from 'react';
import PostForm from '../components/PostForm';

function Home() {
    return (
        <main>
            <div>

                {/* when user logged in form will show otherwise just list of posts */}
                <PostForm />
                {/* list of posts */}
            </div>
        </main>
    )
}

export default Home;