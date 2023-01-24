export function GetCatID(cat) {
    const { name, sex, mother, date } = cat;
    const type = (mother ? `Kitten` : `${sex == 'male' ? `King` : `Queen`}`);
    const identifier = (type == 'kitten' ? `${date}-${name}-collar` : `${type}-${name}`);
  
    return identifier;
  }

export function GetCatFilepath(cat) {
  const { name, sex, mother, date } = cat;
  const type = (mother ? `Kitten` : `${sex == 'male' ? `King` : `Queen`}`);
  const filepath = `${type}s/${type == 'kitten' ? `${date}/` : ``}${name}/`;

  return filepath;
}

export function GetCatDescription(cat) {
  const { name, type, colour, sex, adj, date, cattery, location } = cat;
  var description;

  if (type == 'kitten') {
    description = ConvertDate(date);
  } else {
    if (sex == 'male') {
      description = `${colour} ${adj} Bengal`;
    } else {
      description = `${cattery} ${name} ${ConvertDate(date)}${location ? `, ${location}` : ``}`;
    }
  }

  description = description.charAt(0).toUpperCase() + description.slice(1);

  return description;
}

export function ConvertDate(date) {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  var dateString = new Date(date).toLocaleDateString('en-us', options);

  return dateString;
}

export function GetReleaseDate(date) {
  const daysToRelease = 84;
  var releaseDate = new Date(date);

  releaseDate.setDate(releaseDate.getDate() + daysToRelease);

  return releaseDate;
}