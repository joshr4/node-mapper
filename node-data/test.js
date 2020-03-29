function removeProperty(obj, prop) {
  if (obj[prop]) {
    delete obj[prop];
    return true;
  }
  return false;
}

const out = removeProperty({ test: 1, what: 12 }, 'what');
console.log(out);
