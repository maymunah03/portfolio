import math
import numpy as np

print("Section 1.6.2 Exercises")

print("Problem 1")
print("I love Python")

print("Problem 6")
radius = 5

height = 3

surfaceArea = 2 * math.pi * radius * (radius + height)

volume = math.pi * radius**2 * height

print(f"The surface area is: {surfaceArea} square units.")
print(f"The volume is: {volume} cubic units.")

print("Problem 7 and 8")
x1, y1 = 3, 4
x2, y2 = 5, 9

slope = (y2 - y1) / (x2 -x1)

distance = math.sqrt((x2 - x1)**2 + (y2 - y1)**2)

print(f"The slope is: {slope}")
print(f"The distance is: {distance}")

print("Problem 9")
factorial = math.factorial(6)
print(f"The result of 6! is {factorial}")

print("Problem 11")
def r_pi(N):
    sum = 0
    for k in range(N + 1):
        numerator = math.factorial(4 * k) * (1103 + 26390 * k)
        denominator = (math.factorial(k) ** 4) * (396 ** (4 * k))
        sum += numerator / denominator
    return (2 * math.sqrt(2) / 9801) * sum

approximation_N0 = 1 / r_pi(0)

approximation_N1 = 1 / r_pi(1)

real_pi = math.pi

print(f"Approximation for N=0: {approximation_N0}")
print(f"Approximation for N=1: {approximation_N1}")
print(f"Python's value of pi: {real_pi}")

print("Problem 14")
degree = 87

radians = math.radians(degree)

final = math.sin(radians)

print(f"sin(87 degrees) = {final}")

print("Section 5.4 Exercises")

print("Problem 1")
y=0
for i in range(1000):
    for j in range(1000):
        if i==j:
            y+=1
print(f"the value of y is = {y}")

print("Problem 5")
def my_mat_mult(P, Q):
    
    M = [[0] * len(Q[0]) for _ in range(len(P))]

    for i in range(len(P)):
        for j in range(len(Q[0])):
            M[i][j] = sum(P[i][k] * Q[k][j] for k in range(len(Q)))

    return M

P = [
    [1, 2, 3],
    [4, 5, 6]
]

Q = [
    [7, 8],
    [9, 10],
    [11, 12]
]

answer = my_mat_mult(P, Q)
print("The product of P x Q is:")
for row in answer:
    print(row)
    
print("Section 14.7 Exercises")

print("Problem 8")
def gaussEliminationMethod(A, b):
    n = len(b)
    
    # forward elimination
    for i in range(n):
        for j in range(i+1, n):
            if A[i][i] == 0:
                raise ValueError("Error: Can not divide by zero.")
            factor = A[j][i] / A[i][i]
            for k in range(i, n):
                A[j][k] = A[j][k] - factor * A[i][k]
            b[j] = b[j] - factor * b[i]
    
    # back substitution
    x = [0 for _ in range(n)]
    for i in range(n-1, -1, -1):
        sum_ax = 0
        for j in range(i+1, n):
            sum_ax += A[i][j] * x[j]
        x[i] = (b[i] - sum_ax) / A[i][i]
    
    return x

A = [[3, -1, 4],
     [17, 2, 1],
     [1, 12, -7]]

b = [2, 14, 54]

answer = gaussEliminationMethod(A, b)
print("the final answer for the gauss elimination method is:", answer)

print("Problem 9")
def gaussJordanMethod(A, b):
    n = len(b)
    
    # new augmented matrix A with the vector b
    newMatrix = [A[i] + [b[i]] for i in range(n)]

    # gauss-Jordan elimination
    for i in range(n):
        # make the diagonal element 1 by dividing the whole row
        diag = newMatrix[i][i]
        for k in range(len(newMatrix[i])):
            newMatrix[i][k] /= diag
        
        # make all elements above and below the pivot 0
        for j in range(n):
            if i != j:
                factor = newMatrix[j][i]
                for k in range(len(newMatrix[j])):
                    newMatrix[j][k] -= factor * newMatrix[i][k]

    # get the solution from the new augmented matrix
    solution = [newMatrix[i][-1] for i in range(n)]
    return solution

A = [[3, -1, 4],
     [17, 2, 1],
     [1, 12, -7]]

b = [2, 14, 54]

answer = gaussJordanMethod(A, b)
print("the final answer for the gauss jordan method is:", answer)

print("Problem 10")
def triangleMatrices(A):
    n = A.shape[0]  # number of rows (or columns since A is square)
    L = np.zeros_like(A, dtype=float)  # lower triangular matrix
    U = np.zeros_like(A, dtype=float)  # upper triangular matrix
    
    for i in range(n):
        # calculating the Upper triangular matrix U
        for k in range(i, n):
            sum_u = sum(L[i][j] * U[j][k] for j in range(i))  # sum for U
            U[i][k] = A[i][k] - sum_u  # find U element
        
        # calculating the lower triangular matrix L
        for k in range(i, n):
            if i == k:
                L[i][i] = 1  # diagonal elements of L are 1
            else:
                sum_l = sum(L[k][j] * U[j][i] for j in range(i))  # sum for L
                L[k][i] = (A[k][i] - sum_l) / U[i][i]  # find L element
    
    return L, U

A = np.array([[3, -1, 4],
              [17, 2, 1],
              [1, 12, -7]], dtype=float)

L, U = triangleMatrices(A)


print("The lower triangular matrix L is:")
print(L)

print("\nThe upper triangular matrix U is:")
print(U)
