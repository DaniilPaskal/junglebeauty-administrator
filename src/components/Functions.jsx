export function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export function getCatID(cat) {
    const { name, date } = cat;
    const id = `${name}${date ? `.${date}` : ``}`;
    
    return id;
  }

export function getCatFilepath(cat) {
  const { sex, mother } = cat;
  const id = cat.id || getCatID(cat);
  const idValues = id.split('.');
  const name = idValues[0];
  const date = idValues[1];
  const type = (mother ? `Kitten` : `${sex == 'male' ? `King` : `Queen`}`);
  const filepath = `${type}s/${type == 'Kitten' && `${date}/`}${name}/`;

  return filepath;
}

export function getCatDescription(cat) {
  const { name, type, colour, sex, adj, date, cattery, location } = cat;
  var description;

  if (type == 'kitten') {
    description = convertDate(date);
  } else {
    if (sex == 'male') {
      description = `${colour} ${adj} Bengal`;
    } else {
      description = `${cattery} ${name} ${convertDate(date)}${location ? `, ${location}` : ``}`;
    }
  }

  description = description.charAt(0).toUpperCase() + description.slice(1);

  return description;
}

export function convertDate(date) {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  var dateString = new Date(date).toLocaleDateString('en-us', options);

  return dateString;
}

export function getReleaseDate(date) {
  const daysToRelease = 84;
  var releaseDate = new Date(date);

  releaseDate.setDate(releaseDate.getDate() + daysToRelease);

  return releaseDate;
}