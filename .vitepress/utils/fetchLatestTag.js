export function fetchLatestTag() {
  let docsReleaseTagSpan = document.querySelector('div.main > p.tagline > samp');
  if (docsReleaseTagSpan !== null) return;

  fetch('https://api.github.com/repos/explore-pu/laravel-admin/tags')
    .then((res) => res.json())
    .then((json) => json[0].name ?? '')
    .then(tag_name => {
      if (!tag_name) return;
      const tagLineParagragh = document.querySelector('div.main > p.tagline');

      docsReleaseTagSpan = document.createElement('samp');
      docsReleaseTagSpan.classList.add('github-release-tag');
      docsReleaseTagSpan.innerText = tag_name;
      tagLineParagragh?.appendChild(docsReleaseTagSpan);
    });
}
