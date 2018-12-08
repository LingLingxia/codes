class Album {
  label: Album.AlbumLabel;
}
namespace Album {
  export class AlbumLabel { }
}

//一个类Album 有
console.log(typeof Album);//function
console.log(typeof Album.AlbumLabel);//function

//编译出来的Album时没有label这个属性的。



//就是给buildLabel这个函数加了属性，namespace里的属性记得export
function buildLabel(name: string): string {
  return buildLabel.prefix + name + buildLabel.suffix;
}

namespace buildLabel {
  export let suffix = "";
  export let prefix = "Hello, ";
}

console.log(buildLabel("Sam Smith"));

//合并到枚举

enum Color {
  red = 1,
  green = 2,
  blue = 4
}

namespace Color {
  export function mixColor(colorName: string) {
      if (colorName == "yellow") {
          return Color.red + Color.green;
      }
      else if (colorName == "white") {
          return Color.red + Color.green + Color.blue;
      }
      else if (colorName == "magenta") {
          return Color.red + Color.blue;
      }
      else if (colorName == "cyan") {
          return Color.green + Color.blue;
      }
  }
}

document.getElementById('name');