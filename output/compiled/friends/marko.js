module.exports = function create(__helpers) {
  var str = __helpers.s,
      empty = __helpers.e,
      notEmpty = __helpers.ne,
      forEach = __helpers.f,
      escapeXml = __helpers.x,
      attr = __helpers.a,
      escapeXmlAttr = __helpers.xa;

  return function render(data, out) {
    out.s('<!doctype html> <html lang="en"><head><meta charset="UTF-8"><title>Friends</title></head><body><div class="friends">');

    forEach(data.friends, function(friend) {
      out.s('<div class="friend"><ul><li>Name: ' +
        escapeXml(data.getFullNameRaptor(friend)) +
        '</li><li>Balance: ' +
        escapeXml(friend.balance) +
        '</li><li>Age: ' +
        escapeXml(friend.age) +
        '</li><li>Address: ' +
        escapeXml(friend.address) +
        '</li><li>Image: <img' +
        attr("src", friend.picture) +
        '></li><li>Company: ' +
        escapeXml(friend.company) +
        '</li><li>Email: <a href="mailto:' +
        escapeXmlAttr(friend.email) +
        '">' +
        escapeXml(friend.email) +
        '</a></li><li>About: ' +
        escapeXml(friend.about) +
        '</li>');

      if (notEmpty(friend.tags)) {
        out.s('<li>Tags: <ul>');

        forEach(friend.tags, function(tag) {
          out.s('<li>' +
            escapeXml(tag) +
            '</li>');
        });

        out.s('</ul></li>');
      }

      if (notEmpty(friend.friends)) {
        out.s('<li>Friends: <ul>');

        forEach(friend.friends, function(friend) {
          out.s('<li>' +
            escapeXml(friend.name) +
            ' (' +
            escapeXml(friend.id) +
            ')</li>');
        });

        out.s('</ul></li>');
      }

      out.s('</ul></div>');
    });

    out.s('</div></body></html>');
  };
}