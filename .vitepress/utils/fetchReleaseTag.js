export function fetchReleaseTag() {
  return fetch('https://api.github.com/repos/explore-pu/laravel-admin/releases/latest')
    .then((res) => res.json())
    .then((json) => json.tag_name ?? '')
    .then(releaseTag => {
      if (!releaseTag) return;
      const tagLineParagragh = document.querySelector('div.main > p.tagline');

      let docsReleaseTagSpan = document.querySelector('div.main > p.tagline > samp');

      if (docsReleaseTagSpan !== null) return;

      docsReleaseTagSpan = document.createElement('samp');
      docsReleaseTagSpan.classList.add('docs-cn-github-release-tag');
      docsReleaseTagSpan.innerText = releaseTag;
      tagLineParagragh?.appendChild(docsReleaseTagSpan);
    });
}
