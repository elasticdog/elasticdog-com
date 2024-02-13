This is a list of the filters that I've been using to organize my emails from GitHub. To create the filter, you can copy the code block directly into the search bar and then click the drop-down triangle on the right to find the _Create filter_ button.

## GitHub Assignments

```
from:(notifications@github.com) cc:(assign@noreply.github.com)
```

Label: `gh-assignments`

## GitHub Mention

```
from:(notifications@github.com) cc:(mention@noreply.github.com)
```

Label: `gh-mention`

## GitHub PR Merged

```
from:(notifications@github.com) "merged AROUND 1 into"
```

Label: `gh-merged`

## GitHub PR Review Requested

```
from:(notifications@github.com) cc:(review_requested@noreply.github.com) "requested your review on"
```

Label: `gh-review-requested`

---

## Further Reading

- [Search operators you can use with Gmail](https://support.google.com/mail/answer/7190?hl=en)
- [Gmail and GitHub](https://gist.github.com/ldez/bd6e6401ad0855e6c0de6da19a8c50b5)
- [GitHub - About email notifications](https://help.github.com/en/github/receiving-notifications-about-activity-on-github/about-email-notifications)