import Image from '../atoms/Image';
import Title from '../atoms/Title';

function Card(props) {
  const {image, icon, titleText, description,
    preDescription, footer, styleClass} = props;
  return (
    <li className={`card ${styleClass}`}>
        {image &&
          <Image path={image} />
        }
        {icon &&
          <i className={`${icon} icon`} />
        }
        <div className="details">
          <Title text={titleText}/>
          {preDescription &&
            preDescription
          }
          {description  &&
            description
          }

          {footer &&
            footer
          }
        </div>

    </li>
  )
}

export default Card;