import React from 'react';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/esm/Button';
import AuthenticatedRoute from '../AuthenticatedRoute/AuthenticatedRoute';
import CreatePost from '../CreatePost/CreatePost';

const BlogCards = (props: any) => {

    let cardList: any = [];

    const blogTitles = [["blog1", "id1"], ["blog2", "id2"], ["blog3", "id3"]]
    //temp data; will get from DB from API call
    
    const changeID = (id: string) => {
        //set blogID state to 'id'
    }

    const makeCard = (title: string, text: string, path: any, func?: Function, param?: string) => {
        return(
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>
                        {title}
                    </Card.Title>
                    <Button onClick={() => {
                        window.location.href=path;
                        if (func) func(param);
                        }}>
                        {text}
                    </Button>
                </Card.Body>
            </Card>
        )
    }
    const pushCards = () => {
        for (let i = 0; i < blogTitles.length; i++) {
            const title = blogTitles[i][0];
            const id = blogTitles[i][1];
            cardList.push(makeCard(title, "Blog", "edit", changeID, id))
        } 
        cardList.push(makeCard("Create New Blog", "Create New Blog", "new"))
    }

    pushCards();

    return (
        cardList
    );
};

export default BlogCards;