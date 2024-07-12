def shortestToChar(s, c):
    n = len(s)
    answer = [float('inf')] * n

    # First pass: left to right
    prev = float('-inf')
    for i in range(n):
        if s[i] == c:
            prev = i
        answer[i] = min(answer[i], abs(i - prev))

    # Second pass: right to left
    prev = float('inf')
    for i in range(n - 1, -1, -1):
        if s[i] == c:
            prev = i
        answer[i] = min(answer[i], abs(i - prev))

    return answer

# Example usage
s = "loveleetcode"
c = 'e'
print(shortestToChar(s, c))  # Output: [3, 2, 1, 0, 1, 0, 0, 1, 2, 2, 1, 0]
