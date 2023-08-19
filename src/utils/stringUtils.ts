/** Genera un ID único para cada petición, basado en el tiempo actual y un número aleatorio. */
export function uniqueId() {
  // eslint-disable-next-line no-bitwise
  const timestamp = ((Date.now() / 1000) | 0).toString(16);
  const id =
    timestamp +
    Math.floor(Math.random() * 1000)
      .toString()
      .padStart(3, '0');
  return id;
}
