import { Button, Card } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const RecipeListItem = ({ recipe }) => {
    const cardStyle = {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: '100%'
    };

    const contentStyle = {
        flexGrow: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between'
    };

    const buttonsContainerStyle = {
        display: 'flex',
        justifyContent: 'space-around',
        marginTop: '10px'
    };

    return (
        <Card style={cardStyle}>
            <img src={recipe.image_url} alt="thumbnail" style={{ height: 170 }} />
            <Card.Content style={contentStyle}>
                <Card.Header content={recipe.title} />
                <Card.Description>
                    <h4>{recipe.publisher}</h4>
                </Card.Description>
            </Card.Content>
            <div style={buttonsContainerStyle}>
                <Button 
                    as={Link}
                    to={`/recipes/${recipe.recipe_id}`}
                    content="Details"
                    color="blue"
                    size="tiny"
                />
                <Button 
                    href={recipe.source_url}
                    target="_blank"
                    content="Recipe URL"
                    color="green"
                    size="tiny"
                />
            </div>
        </Card>
    );
}

export default RecipeListItem;
