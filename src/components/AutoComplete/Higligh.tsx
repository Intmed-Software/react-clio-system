import React from "react";
const defaultHighlight = (s) => <em>{s}</em>;
// Needed if the target includes ambiguous characters that are valid regex operators.
const escapeRegex = (v) => v.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&");
/**
 * Case insensitive highlight which keeps the source casing.
 * @param {string} source text
 * @param {string} target to highlight within the source text
 * @param {Function} callback to define how to highlight the text
 * @returns {Array}
 */
const highlightWord = (source, target, callback) => {
  const res = [];

  if (!source) return res;
  if (!target) return source;

  const regex = new RegExp(escapeRegex(target), "gi");

  let lastOffset = 0;

  // Uses replace callback, but not its return value
  source.replace(regex, (val, offset) => {
    // Push both the last part of the string, and the new part with the highlight
    res.push(
      source.substr(lastOffset, offset - lastOffset),
      // Replace the string with JSX or anything.
      (callback || defaultHighlight)(val)
    );
    lastOffset = offset + val.length;
  });

  // Push the last non-highlighted string
  res.push(source.substr(lastOffset));
  return res;
};

/**
 * React component that wraps our `highlightWord` util.
 */
export const Highlight = ({ source, target, children }) =>
  highlightWord(source, target, children);
