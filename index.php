<?php
declare(strict_types=1);

$linkHeader = '</llms.txt>; rel="service-doc"; type="text/plain", </sitemap.xml>; rel="describedby"; type="application/xml"';

header('Link: ' . $linkHeader);
header('Vary: Accept', false);

function acceptsMarkdown(string $acceptHeader): bool
{
    foreach (explode(',', $acceptHeader) as $part) {
        $segments = array_map('trim', explode(';', strtolower($part)));
        $mediaType = $segments[0] ?? '';

        if ($mediaType !== 'text/markdown') {
            continue;
        }

        foreach (array_slice($segments, 1) as $segment) {
            if (preg_match('/^q=([0-9.]+)$/', $segment, $matches)) {
                return (float) $matches[1] > 0.0;
            }
        }

        return true;
    }

    return false;
}

$root = __DIR__;

if (acceptsMarkdown($_SERVER['HTTP_ACCEPT'] ?? '') && is_file($root . '/index.md')) {
    header('Content-Type: text/markdown; charset=UTF-8');
    header('x-markdown-tokens: 2044');
    readfile($root . '/index.md');
    exit;
}

header('Content-Type: text/html; charset=UTF-8');
readfile($root . '/index.html');
