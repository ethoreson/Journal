!function e(n,r,t){function o(i,l){if(!r[i]){if(!n[i]){var a="function"==typeof require&&require;if(!l&&a)return a(i,!0);if(u)return u(i,!0);var p=new Error("Cannot find module '"+i+"'");throw p.code="MODULE_NOT_FOUND",p}var s=r[i]={exports:{}};n[i][0].call(s.exports,function(e){var r=n[i][1][e];return o(r||e)},s,s.exports,e,n,r,t)}return r[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}({1:[function(e,n,r){var t=e("./../js/journal.js").journalModule;$(document).ready(function(){$("#new-journal-entry").submit(function(e){e.preventDefault();var n=$("#title").val(),r=$("#body").val(),o=new t,u=o.numberOfWords(r),i=o.getVowels(r),l=o.getConsonants(r);$("#repost").append("<h2><li>"+n+"</li></h2>"),$("#repost").append("<h3><li>"+r+"</li></h3>"),$("#post").append("<li>Number of Words: "+u+"</li>"),$("#post").append("<li>Number of Vowels: "+i+"</li>"),$("#post").append("<li>Number of Consonants: "+l+"</li>")})})},{"./../js/journal.js":2}],2:[function(e,n,r){function t(){}t.prototype.numberOfWords=function(e){return e.split(" ").length},t.prototype.getVowels=function(e){var n=e.match(/[aeiou]/gi);return null===n?0:n.length},t.prototype.getConsonants=function(e){return(e=(e=e.replace(/\s+/g,"")).replace(/[^a-zA-Z]/gi,"")).split("").length-this.getVowels(e)},r.journalModule=t},{}]},{},[1]);