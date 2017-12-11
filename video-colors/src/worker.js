
onmessage = function (e) {
  const data = e.data
  const BLOCKSIZE = 5
  const STEPS = 4
  let i = -4
  let count = 0
  let rgb = {r: 0, g: 0, b: 0}

  let length = data.data.length
  while ((i += BLOCKSIZE * STEPS) < length) {
    ++count
    rgb.r += data.data[i]
    rgb.g += data.data[i + 1]
    rgb.b += data.data[i + 2]
  }

    // ~~ used to floor values
  rgb.r = ~~(rgb.r / count)
  rgb.g = ~~(rgb.g / count)
  rgb.b = ~~(rgb.b / count)

  postMessage(rgb)
}
