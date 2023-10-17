# BEGIN: 9f8e7d6a4b3c
import unittest
import methods

class TestMethods(unittest.TestCase):
    
    def test_bisection(self):
        # Test case 1: Simple function with one root
        expression = 'x**2 - 4'
        a = 1
        b = 3
        expected_root = 2
        expected_iterations = 18
        root, iterations = methods.bisection(expression, a, b)
        self.assertAlmostEqual(root, expected_root)
        self.assertEqual(iterations, expected_iterations)
        
        # Test case 2: Function with multiple roots
        import unittest
        import methods

        class TestMethods(unittest.TestCase):
            
            def test_bisection(self):
                # Test case 1: Simple function with one root
                expression = 'x**2 - 4'
                a = 1
                b = 3
                expected_root = 2
                expected_iterations = 18
                root, iterations = methods.bisection(expression, a, b)
                self.assertAlmostEqual(root, expected_root)
                self.assertEqual(iterations, expected_iterations)
                
                # Test case 2: Function with multiple roots
                expression = 'x**3 - 6*x**2 + 11*x - 6'
                a = 0
                b = 4
                expected_root = 1
                expected_iterations = 18
                root, iterations = methods.bisection(expression, a, b)
                self.assertAlmostEqual(root, expected_root)
                self.assertEqual(iterations, expected_iterations)
                
                # Test case 3: Function with no roots in the interval
                expression = 'x**2 + 1'
                a = 0
                b = 1
                with self.assertRaises(ValueError):
                    methods.bisection(expression, a, b)
                
                # Test case 4: Function with opposite signs at a and b, but no root in the interval
                expression = 'x**2 - 4'
                a = 0
                b = 1
                with self.assertRaises(ValueError):
                    methods.bisection(expression, a, b)
                
                # Test case 5: Function with opposite signs at a and b, but no root within tolerance
                expression = 'x**2 - 4'
                a = 1
                b = 3
                with self.assertRaises(ValueError):
                    methods.bisection(expression, a, b, tolerance=1e-10)
                
                # Test case 6: Function with opposite signs at a and b, but max iterations reached
                expression = 'x**2 - 4'
                a = 1
                b = 3
                with self.assertRaises(ValueError):
                    methods.bisection(expression, a, b, max_iterations=5)
            
            def test_false_position(self):
                # Test case 1: Simple function with one root
                expression = 'x**2 - 4'
                a = 1
                b = 3
                expected_root = 2
                expected_iterations = 3
                root, iterations = methods.false_position(expression, a, b)
                self.assertAlmostEqual(root, expected_root)
                self.assertEqual(iterations, expected_iterations)
                
                # Test case 2: Function with multiple roots
                expression = 'x**3 - 6*x**2 + 11*x - 6'
                a = 0
                b = 4
                expected_root = 1
                expected_iterations = 3
                root, iterations = methods.false_position(expression, a, b)
                self.assertAlmostEqual(root, expected_root)
                self.assertEqual(iterations, expected_iterations)
                
                # Test case 3: Function with no roots in the interval
                expression = 'x**2 + 1'
                a = 0
                b = 1
                with self.assertRaises(ValueError):
                    methods.false_position(expression, a, b)
                
                # Test case 4: Function with opposite signs at a and b, but no root in the interval
                expression = 'x**2 - 4'
                a = 0
                b = 1
                with self.assertRaises(ValueError):
                    methods.false_position(expression, a, b)
                
                # Test case 5: Function with opposite signs at a and b, but no root within tolerance
                expression = 'x**2 - 4'
                a = 1
                b = 3
                with self.assertRaises(ValueError):
                    methods.false_position(expression, a, b, tolerance=1e-10)
                
                # Test case 6: Function with opposite signs at a and b, but max iterations reached
                expression = 'x**2 - 4'
                a = 1
                b = 3
                with self.assertRaises(ValueError):
                    methods.false_position(expression, a, b, max_iterations=5)
            
            def test_steffensen(self):
                # Test case 1: Simple function with one root
                expression = 'x**2 - 4'
                x0 = 2
                expected_root = 2
                expected_iterations = 3
                root, iterations = methods.steffensen(expression, x0)
                self.assertAlmostEqual(root, expected_root)
                self.assertEqual(iterations, expected_iterations)
                
                # Test case 2: Function with multiple roots
                expression = 'x**3 - 6*x**2 + 11*x - 6'
                x0 = 1
                expected_root = 1
                expected_iterations = 3
                root, iterations = methods.steffensen(expression, x0)
                self.assertAlmostEqual(root, expected_root)
                self.assertEqual(iterations, expected_iterations)
                
                # Test case 3: Function with no roots in the interval
                expression = 'x**2 + 1'
                x0 = 0
                with self.assertRaises(ValueError):
                    methods.steffensen(expression, x0)
                
                # Test case 4: Function with no convergence
                expression = 'x**2 - 4'
                x0 = 1
                with self.assertRaises(ValueError):
                    methods.steffensen(expression, x0, max_iterations=5)
            
            def test_newton_raphson(self):
                # Test case 1: Simple function with one root
                expression = 'x**2 - 4'
                x0 = 2
                expected_root = 2
                expected_iterations = 3
                root, iterations = methods.newton_raphson(expression, x0)
                self.assertAlmostEqual(root, expected_root)
                self.assertEqual(iterations, expected_iterations)
                
                # Test case 2: Function with multiple roots
                expression = 'x**3 - 6*x**2 + 11*x - 6'
                x0 = 1
                expected_root = 1
                expected_iterations = 4
                root, iterations = methods.newton_raphson(expression, x0)
                self.assertAlmostEqual(root, expected_root)
                self.assertEqual(iterations, expected_iterations)
                
                # Test case 3: Function with no roots in the interval
                expression = 'x**2 + 1'
                x0 = 0
                with self.assertRaises(ValueError):
                    methods.newton_raphson(expression, x0)
                
                # Test case 4: Function with no convergence
                expression = 'x**2 - 4'
                x0 = 1
                with self.assertRaises(ValueError):
                    methods.newton_raphson(expression, x0, max_iterations=5)

if __name__ == '__main__':
    unittest.main()
