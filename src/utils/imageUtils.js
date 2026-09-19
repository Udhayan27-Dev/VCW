/**
 * Resolves static image paths to include Vite BASE_URL (e.g. /VCW/ on GitHub Pages)
 */
export const getAssetUrl = (path) => {
  if (!path) return '';
  if (path.startsWith('http://') || path.startsWith('https://') || path.startsWith('data:')) {
    return path;
  }

  // Handle wrong legacy paths like '/assets/images/xyz.png' -> 'images/gallery/xyz.png'
  let cleanPath = path.startsWith('/') ? path.slice(1) : path;
  if (cleanPath.startsWith('assets/images/')) {
    cleanPath = cleanPath.replace('assets/images/', 'images/gallery/');
  }

  const baseUrl = import.meta.env.BASE_URL || '/';
  const cleanBase = baseUrl.endsWith('/') ? baseUrl : `${baseUrl}/`;

  return `${cleanBase}${cleanPath}`;
};
